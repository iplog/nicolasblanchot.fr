var conn = require('./redis').inst;
var data = require('../data/data');

exports.createData = function() {

  createCategories();
  createActivities();
  createDetails();
};

function createCategories() {
  var categories = data.categories;
  conn.del('categories', function(error, val) {
    if (!error) {
      categories.forEach(function(elem, ind) {
        conn.sadd('categories', ind, function(error, val) {
          if (!error) {
            var key = 'cat:' + ind;
            var values = {
              id: ind,
              name: elem
            };
            conn.hmset(key, values, function(err, val) {
              if (err) {
                console.log(err);
              }
            });
          }
        });
      });
    }
  });
}
function createActivities() {
  var activities = data.activities;
  this.pipe = conn.multi();
  this.createdCategoriesListInd = [];
  activities.forEach(addActivity.bind(this));
  this.pipe.exec(function(err, val) {
    if (err) {
      console.log(err);
    }
  });
}
function addActivity(elem, ind) {
  // reset keys if necessary
  var resetKey = this.createdCategoriesListInd.indexOf(elem.cat) === -1;

  if (resetKey) {
    this.pipe.del('cat:' + elem.cat + ':activities');
    this.createdCategoriesListInd.push(elem.cat);
  }
  // add activity id in cat:n:activities
  this.pipe.sadd('cat:' + elem.cat + ':activities', ind);
  // create activity hset
  this.pipe.del('activity:' + ind);
  this.pipe.hmset('activity:' + ind, elem);
}

function createDetails() {
  var activities = data.details;
  this.pipe = conn.multi();
  this.createdAcitivitiesListInd = [];
  activities.forEach(addDetail.bind(this));
  this.pipe.exec(function(err, val) {
    if (err) {
      console.log(err);
    }
  });
}
function addDetail(elem, ind) {
  // reset keys if necessary
  var resetKey = this.createdAcitivitiesListInd.indexOf(elem.activityId) === -1;

  if (resetKey) {
    this.pipe.del('activity:' + elem.activityId + ':details');
    this.createdAcitivitiesListInd.push(elem.activityId);
  }
  // add activity id in cat:n:activities
  this.pipe.sadd('activity:' + elem.activityId + ':details', ind);
  // create activity hset
  this.pipe.del('detail:' + ind);
  this.pipe.hmset('detail:' + ind, elem);
}
