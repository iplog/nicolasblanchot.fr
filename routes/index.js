// thanks to http://detectmobilebrowsers.com/
var phoneRgx = /android.+mobile|bada\/|iemobile|ip(hone|od)|kindle|opera m(ob|in)i|palm( os)?|phone|windows (ce|phone)/i;
var notSupportedRgx = /blackberry|msie/i;
/**
 * GET home page.
 */
exports.index = function(req, res) {
  var data = {
    locals : {
      title : 'My Resume',
      isProd : global.isProd
    }
  };

console.log(req.headers['user-agent']);
  // check if classic smartphone or blackberry
  var isSmartphone = phoneRgx.test(req.headers['user-agent'].toLowerCase());
  var isNotSupported = notSupportedRgx.test(
    req.headers['user-agent'].toLowerCase()
  );

  var loadFullscreen = !isSmartphone && !req.query['no_check'];

  if (loadFullscreen) {
    data.layout = 'demo_layout';
  } else if (isNotSupported) {
    data.layout = 'error_layout';
    res.render('not_supported', data);
    return;
  }

  res.render('index', data);
};
/**
 * send 404 error
 */
exports.error404 = function(req, res) {
  var path = req.params[0];
  var data = {
    locals : {
      title : path +' - Error404' ,
      host : req.headers.host,
      path : req.params[0]
    },
    layout : 'error_layout',
    status :404
  };
  res.render('error404', data);
};
/**
 * send under consturction page
 */
exports.underConstruction = function(req, res) {
  var data = {
    locals : {
      title : 'Under Construction',
      addAnalytics : global.isProd
    },
    layout : 'error_layout'
  };
  res.render('under_construction', data);
};
