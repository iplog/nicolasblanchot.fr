var childProcess = require('child_process');
var fs = require('fs');

var webrootPath = './../public/';
var folders = [
  'app'
];

var building = false;

folders.forEach(function(folder) {
  var direPath = webrootPath + folder;
  watchFiles(direPath, /.*\.js/);
});

function watchFiles(dirPath, regex) {
  findFiles(dirPath, regex, findFilesCallback);
}

function rjsCompilation(file) {
  if (file.indexOf('/main-built.js') === -1) {
    childProcess.exec('./build.sh -s', function(error, stdout, stderr) {
      if (error !== null) {
        console.log('exec error: ' + error);
      }
      setTimeout(function() {
        building = false;
      }, 1000);
    });
  } else {
    building = false;
  }
}

function findFilesCallback(error, files) {
  if (!error) {
    files.forEach(function(file) {
      watchFile(file);
    });
  }

}

function watchFile(file) {
    var tempDate = 0;
    fs.watchFile(file, function(curr, prev) {
      var needToBeUpdated = (curr.mtime !== prev.mtime &&
        ((tempDate - curr.mtime) < 0));
      if (needToBeUpdated && !building) {
        building = true;
        tempDate = curr.mtime;
        console.log(curr.mtime + ": " + file + " has changed.");
        rjsCompilation(file);
      }
    });
}

function findFiles(dir, regex, callback) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return callback(err);
    (function next(i) {
      var file = list[i];
      if (!file) return callback(null, results);
      file = dir + '/' + file;
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          findFiles(file, regex, function(err, res) {
            results = results.concat(res);
            next(++i);
          });
        } else {
          if (file.match(regex)) results.push(file);
          next(++i);
        }
      });
    })(0);
  });
}
