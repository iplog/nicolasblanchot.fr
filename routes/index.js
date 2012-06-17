
/*
 * GET home page.
 */
exports.index = function(req, res){
  // var data = {
  //   locals: {
  //     title: 'Nicolas Blanchot Resume' ,
  //     message: "Hello World!",
  //     items: ["one", "two", "three"]
  //   },
  //   partials: {
  //     foo: "<h1>{{message}}</h1>",
  //     bar: "<ul>{{#items}}<li>{{.}}</li>{{/items}}</ul>"
  //   }
  // };
  var data = {
    locals: {
      title: 'Nicolas Blanchot Resume'
    }
  };
  res.render('index', data);
};
/*
 * send 404 error
 */
exports.error404 = function(req, res) {
  // console.log(req);
  var path = req.params[0];
  var data = {
    locals: {
      title: path +' - Error404' ,
      host : req.headers.host,
      path : req.params[0]
    },
    layout : 'error_layout'
  };
  res.render('error404', data);
};
