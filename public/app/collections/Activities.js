define([
  'collections/AppCollection',
  'models/Activity'
], function(
  AppCollection,
  Activity
) {
  return AppCollection.extend({
    model: Activity,
    url: '/activities'
  });
});
