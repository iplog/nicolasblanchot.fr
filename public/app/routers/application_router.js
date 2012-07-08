define([
  'views/CategoriesView',
  'collections/Categories',
  'views/ActivitiesView',
  'collections/Activities',
  'views/DetailsView',
  'collections/Details'
], function(
  CategoriesView,
  Categories,
  ActivitiesView,
  Activities,
  DetailsView,
  Details
) {
  var Router = Backbone.Router.extend({
    routes : {
      '' : 'categories',
      'activities/:id' : 'activities',
      'details/:id' : 'details'
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
    activities : function(id) {
      if (!plogApp.categories) {
        plogApp.router.navigate('', true);
        return;
      }
      var category = plogApp.categories.get(id);

      var createView = plogApp.activitiesView === undefined ||
        (plogApp.activitiesView !== undefined &&
        id !== plogApp.activitiesView.options.catId);

      if (createView) {
        plogApp.activities = new Activities();
        plogApp.activitiesView = new ActivitiesView({
          collection : plogApp.activities,
          catId : category.get('id'),
          title : category.get('name').toLowerCase()
        });
      }
      return plogApp.activitiesView.getData();
    },
    details : function(id) {
      if (!plogApp.categories || !plogApp.activities) {
        plogApp.router.navigate('', true);
        return;
      }
      var activity = plogApp.activities.get(id);

      var createView = plogApp.detailsView === undefined ||
        (plogApp.detailsView !== undefined &&
        id !== plogApp.detailsView.options.activityId);

      if (createView) {
        plogApp.detailsView = new DetailsView({
          collection : new Details(),
          description : activity.get('description'),
          title : activity.get('title').toLowerCase(),
          activityId : activity.get('id')
        });
      }
      return plogApp.detailsView.getData();
    }
  });
  return Router;
});
