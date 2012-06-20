define([
  'models/Activity'
], function(
  Activity
) {
  return Backbone.Collection.extend({
    model: Activity,
    url: '/activities'
  });
});
