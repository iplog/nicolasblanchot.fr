// Require.js config, alias and path
require.config({
  paths : {
    text : '../js/requirejs/text',
    domReady : '../js/requirejs/domReady'
  },
  baseUrl : "./app"
});

require([
// Load our app module and pass it to our definition function
  'app',
  'config',
  'utils/iphone',
  'utils/fast_button',
  '../js/iscroll',
  '../js/mustache'
], function(App, Config){
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function

    App.initialize(Config);
});
