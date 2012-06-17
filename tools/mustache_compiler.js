var mustache = require('./mustache');

exports.compile = function (source, options) {
  if (typeof source === 'string') {
    return function(options) {
      options.locals = options.locals || {};
      options.partials = options.partials || {};
      if (options.body) {
        options.partials.body = options.body;
      }
      return mustache.to_html(source, options.locals, options.partials);
      };
  } else {
    return source;
  }
};
exports.render = function (template, options) {
  template = this.compile(template, options);
  return template(options);
};

