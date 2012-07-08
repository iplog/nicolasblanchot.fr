define([
  'collections/AppCollection',
  'models/Category'
], function(
  AppCollection,
  Category
) {
  return AppCollection.extend({
    model: Category,
    url: '/details'
  });
});
