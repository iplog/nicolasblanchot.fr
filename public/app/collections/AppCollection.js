define([
  'views/LoadingNotifier'
], function(LoadingNotifier) {
  // create loading notifier
  window.plogApp = window.plogApp || {};
  plogApp.loadingNotifier = new LoadingNotifier();

  return Backbone.Collection.extend({
    sync : function(method, model, options) {
      var newOptions = {};
      _.extend(newOptions, options);

      if (options.success) {
        newOptions.success = function(collection, message) {
          plogApp.loadingNotifier.close();
          options.success(collection, message);
        };
      }
      if (options.error) {
        newOptions.error = function(collection, message) {
          plogApp.loadingNotifier.setErrorMode();
          options.error(collection, message);
        };
      }
      plogApp.loadingNotifier.render();

      // call super
      return Backbone.sync(method, model, newOptions);
    }
  });
});
