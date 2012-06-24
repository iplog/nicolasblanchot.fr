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
      var data = this.model.attributes;
      data.hasLink = this.model.get('link') === 'true';
      $(this.el).html(Mustache.to_html(this.template, this.model.attributes));
      return this;
    },
    goToDetails : function(evt) {
      evt.preventDefault();
      if (this.model.get('link') === 'true') {
        plogApp.router.navigate('details/' + this.model.id, true);
      }
      return false;
    }
  });
});
