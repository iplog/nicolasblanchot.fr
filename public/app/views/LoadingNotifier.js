define([
  'text!templates/LoadingNotifierTmpl.html'
], function(
  Tmpl
) {
  return Backbone.View.extend({
    el: '#loadingContainer',
    events : {},
    template : Tmpl,
    initialize : function() {
      _.bindAll(this, 'render', 'setErrorMode', 'close', 'hideContainer');
    },
    render : function() {
      this.$el.html(Mustache.to_html(this.template));
      this.$el.hide();
      this.$el.find('#loadingNotifierTop').show();
      this.$el.find('#loadingNotifierTopError').hide();
      this.$el.find('#loadingNotifierMiddle').hide();

      // clean callback
      this.callback = undefined;

      // display box
      this.$el.fadeIn(150);

      // create a fast back button
      new google.ui.FastButton(
        this.$el.find('#loadingNotifierMiddle').get(0),
        this.close
      );
      return this;
    },
    setErrorMode : function(cb) {
      // set callback
      if (cb) {
        this.callback = cb;
      }
      // modify box content
      this.$el.children('#loadingNotifier').removeClass('loading');
      this.$el.find('#loadingNotifierTop').hide();
      this.$el.find('#loadingNotifierTopError').show();
      this.$el.find('#loadingNotifierMiddle').show();
    },
    close : function() {
      this.$el.children('#loadingNotifier').fadeOut(150, this.hideContainer);
    },
    hideContainer : function () {
      this.$el.hide();
      if (this.callback) {
        this.callback();
      }
    }
  });
});
