
/*
 * GET home page.
 */
exports.index = function(req, res){
  var data = {
    locals: {
      title: 'Plog' ,
      message: "Hello World!",
      items: ["one", "two", "three"]
    },
    partials: {
      foo: "<h1>{{message}}</h1>",
      bar: "<ul>{{#items}}<li>{{.}}</li>{{/items}}</ul>"
    }
  };
  res.render('index', data);
};
