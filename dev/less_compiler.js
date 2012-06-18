var childProcess = require('child_process');
var fs = require('fs');

var webrootPath = './../public/';
var apps = [
  'css',
  'app/styles'
];

var building = false;

apps.forEach(function(app) {
  var direPath = webrootPath + app;
  watchFiles(direPath, /.*\.less/);
});

function watchFiles(dirPath, regex) {
  findFiles(dirPath, regex, findFilesCallback);
}

function lessCompilation(file) {
  // determine which file to compile
  var fileOrig = file;
  var isASubFile = file.indexOf('css/main.less') === -1 &&
    file.indexOf('css/iphone.less') === -1;
  file = (isASubFile) ? './../public/css/main.less' : file;

  var lastInd = file.lastIndexOf('.');
  var target = file.substring(0, lastInd) + '.css';


  // compile to less
  var cmd = 'lessc --yui-compress ' + file + ' ' + target;

  if (fileOrig.indexOf('lib.less') >= 0) {
    cmd += ' && lessc --yui-compress ./../public/css/iphone.less ./../public/css/iphone.css';
  }

  console.log(cmd);
  childProcess.exec(cmd, function(error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    setTimeout(function() {
      building = false;
    }, 1000);
  });

}

function findFilesCallback(error, files) {
  files.forEach(function(file) {
    watchFile(file);
  });
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
        lessCompilation(file);
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
