define([
  'models/Category'
], function(
  Category
) {
  return Backbone.Collection.extend({
    model: Category,
    url: '/categories'
  });
});
