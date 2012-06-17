define([
  'views/CategoriesView',
  'collections/Categories'
], function(
  CategoriesView,
  Categories
) {
  var Router = Backbone.Router.extend({
    routes : {
      '' : 'categories'
    },
    categories : function() {
      if (!plogApp.CategoriesView) {
        plogApp.categoriesView = new CategoriesView({
          collection : Categories
        });
      }
      return plogApp.categoriesView.render();
    }
  });
  return Router;
});
