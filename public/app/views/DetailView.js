define([
  'text!templates/DetailTmpl.html'
], function(
  Tmpl
) {
  return Backbone.View.extend({
    tagName : 'li',
    className : '',
    events : {},
    template : Tmpl,
    initialize : function() {
      _.bindAll(this, 'render');
    },
    render : function() {
      $(this.el).html(Mustache.to_html(this.template, this.model.toJSON()));
      return this;
    }
  });
});
