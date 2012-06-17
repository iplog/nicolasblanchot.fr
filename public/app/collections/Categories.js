define([
  'models/category'
], function(
  Category
) {
  return Backbone.Collection.extend({
    model: Category,
    url: 'categories'
  });
});
