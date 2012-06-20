define([
  'views/CategoriesView',
  'collections/Categories',
  'views/ActivitiesView',
  'collections/Activities'
], function(
  CategoriesView,
  Categories,
  ActivitiesView,
  Activities
) {
  var Router = Backbone.Router.extend({
    routes : {
      '' : 'categories',
      'category/:id' : 'category'
    },
    categories : function() {
      if (!plogApp.categories) {
        plogApp.categories = new Categories();
      }
      if (!plogApp.CategoriesView) {
        plogApp.categoriesView = new CategoriesView({
          collection : plogApp.categories
        });
      }
      return plogApp.categoriesView.render();
    },
    category : function(id) {
      if (!plogApp.categories) {
        plogApp.router.navigate('', true);
        return;
      }
      var category = plogApp.categories.get(id);

      var createView = plogApp.activitiesView === undefined ||
        parseInt(id, 10) !== plogApp.activitiesView.options.catId;

      if (createView) {
        plogApp.activitiesView = new ActivitiesView({
          collection : new Activities(),
          catId : category.get('id'),
          title : category.get('category')
        });
      }
      return plogApp.activitiesView.render();
    }
  });
  return Router;
});
