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
      var data = this.model.toJSON();
      data.hasLink = this.model.get('link') === 'true';
      data.hasLogo = this.model.get('logo') !== '';

      this.$el.html(Mustache.to_html(this.template, data));
      new ActiveButton(this.el);
      return this;
    },
    goToDetails : function(evt) {
      evt.preventDefault();
      if (this.model.get('link') === 'true') {
        if (this.model.get('target') === '') {
          plogApp.router.navigate('details/' + this.model.id, true);
        } else {
          window.open(this.model.get('target'), '_blank');
        }
      }
      return false;
    }
  });
});
