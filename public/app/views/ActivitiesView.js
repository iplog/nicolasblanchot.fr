define([
  'text!templates/ActivitiesTmpl.html',
  'views/ActivityView'
], function(
  Tmpl,
  ActivityView
) {
  return Backbone.View.extend({
    el: '#appContainer',
    events : {},
    template : Tmpl,
    initialize : function() {
      _.bindAll(this, 'render', 'getActivitiesSuccess', 'appendActivity');
    },
    render : function() {
      var data = {
        title : this.options.title
      };
      this.$el.html(Mustache.to_html(this.template, data));
      $.setupScroll(this.$el);
      if (this.collection.length === 0) {
        this.collection.fetch({
          data : {
            catId : this.options.catId
          },
          success: this.getActivitiesSuccess,
          error: this.getActivitiesError
        });
      } else {
        this.getActivitiesSuccess(this.collection);
      }

      // create a fast back button
      new google.ui.FastButton(this.$el.find('.back').get(0), this.back);

      return this;
    },
    getActivitiesSuccess : function(collection) {
      this.docFragment = document.createDocumentFragment();
      _.each(collection.models, this.appendActivity);
      this.$el.find('ul').append(this.docFragment);
      $.refreshScroll(this.$el);
    },
    getActivitiesError : function() {
      alert('Cannot connect to server');
    },
    appendActivity : function(activity, ind) {
      var view = new ActivityView({
        model : activity
      });
      this.docFragment.appendChild(view.render().el);
    },
    back : function(evt) {
      evt.preventDefault();
      window.history.back();
      return false;
    }
  });
});
