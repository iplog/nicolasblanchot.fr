define([
  'text!templates/CategoriesTmpl.html',
  'views/CategoryView'
], function(
  Tmpl,
  CategoryView
) {
  return Backbone.View.extend({
    tagName : 'li',
    className : '',
    events : {
      'click' : 'goToDetails'
    },
    template : Tmpl,
    initialize : function() {
      _.bindAll(this, 'render', 'goToDetails');
    },
    render : function() {
      $(this.el).html(Mustache.to_html(this.template));
      return this;
    },
    goToDetails : function(evt) {
      evt.preventDefault();
      console.log(plop);
    }

  });
});
