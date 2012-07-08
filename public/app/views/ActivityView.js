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
      data.hasTarget = this.model.get('target') !== '';

      this.$el.html(Mustache.to_html(this.template, data));
      new ActiveButton(this.el);
      return this;
    },
    goToDetails : function(evt) {
      var navigate = this.model.get('link') === 'true' &&
        this.model.get('target') === '';
      if (navigate) {
        evt.preventDefault();
        plogApp.router.navigate('details/' + this.model.id, true);
        return false;
      }
    }
  });
});
