// Filename: app.js
define([
  'domReady',
  'routers/application_router'
], function(
  domReady,
  ApplicationRouter
) {
  window.plogApp = window.plogApp || {};

  var domIsReady = false;
  var deviceIsReady = false;

  var watchID = null; // Id to the geoloc listener

  var initialize = function(config) {
    plogApp.config = config;
    domReady(function () {
      domIsReady = true;
      launchApp(config);
    });

    document.addEventListener('deviceready', function() {
      deviceIsReady = true;
      launchApp(config);
    }, false);
  };

  function launchApp(config) {
    if (domIsReady && config.webapp ||
      domIsReady && deviceIsReady
    ) {
      $.initialize();
      plogApp.router = new ApplicationRouter();

      return Backbone.history.start();
    }
    return false;
  }

  return {
    initialize: initialize
  };
});
