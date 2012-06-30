var phoneRgx = /android.+mobile|bada\/|blackberry|iemobile|ip(hone|od)|kindle|opera m(ob|in)i|palm( os)?|phone|windows (ce|phone)/i;
/**
 * GET home page.
 */
exports.index = function(req, res) {
  var data = {
    locals : {
      title : 'Nicolas Blanchot Resume'
    }
  };

  // check if classic smartphone
  var isSmartphone = phoneRgx.test(req.headers['user-agent'].toLowerCase());
  var loadFullscreen = !isSmartphone && !req.query['no_check'];

  if (loadFullscreen) {
    data.layout = 'demo_layout';
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
      title : 'underConstruct'
    },
    layout : 'error_layout'
  };
  res.render('under_construction', data);
};
