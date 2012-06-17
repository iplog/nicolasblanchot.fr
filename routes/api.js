var redis = require('./../tools/redis').inst;

/*
 * GET categories.
 */
exports.categories = function(req, res) {
  redis.get('categories', function(err, value) {
    var data;
    if (err || !value) {
      data = ['No categories found'];
    } else {
      data = JSON.parse(value);
    }
    res.json(data);
  });
};
/*
 * GET activities for a category.
 */
exports.activities = function(req, res) {
  var keyToGet = 'cat' + req.params.catId;
  redis.get(keyToGet, function(err, value) {
    var data;
    if (err || !value) {
      data = {
        date : 'No date',
        title : 'No activity',
        link : false
      };
    } else {
      data = JSON.parse(value);
    }
    res.json(data);
  });
};
/*
 * GET details for an activity.
 */
exports.details = function(req, res) {
  var keyToGet = 'cat' + req.params.catId + ':item' + req.params.itemId;
  redis.get(keyToGet, function(err, value) {
    var data;
    if (err || !value) {
      data = {
        description : 'No Details found for this activity',
        activities : []
      };
    } else {
      data = JSON.parse(value);
    }
    res.json(data);
  });
};
