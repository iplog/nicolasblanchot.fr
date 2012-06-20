define([
  'text!templates/ActivityTmpl.html'
], function(
  Tmpl
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
      $(this.el).html(Mustache.to_html(this.template, this.model.attributes));
      return this;
    },
    goToDetails : function(evt) {
      evt.preventDefault();
      // plogApp.router.navigate('activity/' + this.model.attributes.id, true);
      return false;
    }
  });
});
