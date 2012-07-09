var conn = require('./../tools/redis').conn;

/*
 * GET categories.
 */
exports.categories = function(req, res) {
  var errResponse = ['No categories found'];
  conn.smembers('categories', function(err, val) {
    if(err || !val) {
      res.json(errResponse);
    }

    var pipe = conn.multi();
    val.forEach(function(elem, ind) {
      pipe.hgetall('cat:' + elem);
    });
    pipe.exec(function(err, val) {
      if (err || !val) {
        res.json(errResponse);
      }
      res.json(val);
    });
  });
};

/*
 * GET activities for a category.
 */
exports.activities = function(req, res) {
  var errResponse = {
    date : 'No date',
    title : 'No activity',
    link : false
  };
  var keyToGet = 'cat:' + req.query.catId + ':activities';

  // get data
  conn.smembers(keyToGet, function(err, val) {
    if(err || !val) {
      res.json(errResponse);
    }
    var pipe = conn.multi();
    val.forEach(function(elem, ind) {
      pipe.hgetall('activity:' + elem);
    });
    pipe.exec(function(err, val) {
      if (err || !val) {
        res.json(errResponse);
      }
      res.json(val);
    });
  });
};
/*
 * GET details for an activity.
 */
exports.details = function(req, res) {
  var errResponse = [];
  var keyToGet = 'activity:' + req.query.activityId + ':details';

  // get data
  conn.smembers(keyToGet, function(err, val) {
    if(err || !val) {
      res.json(errResponse);
    }
    var pipe = conn.multi();
    val.forEach(function(elem, ind) {
      pipe.hgetall('detail:' + elem);
    });
    pipe.exec(function(err, val) {
      if (err || !val) {
        res.json(errResponse);
      }
      res.json(val);
    });
  });
};
