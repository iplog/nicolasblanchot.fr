define([
  'text!templates/CategoryTmpl.html'
], function(
  Tmpl
) {
  return Backbone.View.extend({
    tagName : 'li',
    className : 'arrow',
    events : {
      'click' : 'goToDetails'
    },
    template : Tmpl,
    initialize : function() {
      _.bindAll(this, 'render', 'goToDetails');
    },
    render : function() {
      $(this.el).html(Mustache.to_html(this.template, this.model.toJSON()));
      return this;
    },
    goToDetails : function(evt) {
      evt.preventDefault();
      plogApp.router.navigate('activities/' + this.model.id, true);
      return false;
    }
  });
});
