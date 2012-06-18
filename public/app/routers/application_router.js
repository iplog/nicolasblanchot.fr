define([
  'views/CategoriesView',
  'collections/Categories'
], function(
  CategoriesView,
  Categories
) {
  var Router = Backbone.Router.extend({
    routes : {
      '' : 'categories',
      'category/:id' : 'category'
    },
    categories : function() {
      if (!plogApp.CategoriesView) {
        plogApp.categoriesView = new CategoriesView({
          collection : new Categories()
        });
      }
      return plogApp.categoriesView.render();
    },
    category : function(id) {
      console.log(id);
    }
  });
  return Router;
});
