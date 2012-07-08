define([
  'text!templates/DetailsTmpl.html',
  'views/DetailView'
], function(
  Tmpl,
  DetailView
) {
  return Backbone.View.extend({
    el: '#appContainer',
    events : {},
    template : Tmpl,
    initialize : function() {
      _.bindAll(this, 'render', 'getDetailsSuccess', 'appendDetail');
    },
    render : function() {
      var data = {
        title : this.options.title,
        description : this.options.description
      };

      this.$el.html(Mustache.to_html(this.template, data));

      // hide arrow box
      this.$el.find('ul').hide();

      // refresh scroll
      $.setupScroll(this.$el);

      // get data
      if (this.collection.length === 0) {
        this.collection.fetch({
          data : {
            activityId : this.options.activityId
          },
          success: this.getDetailsSuccess,
          error: this.getDetailsError
        });
      } else {
        this.getActivitiesSuccess(this.collection);
      }

      // create a fast back button
      new google.ui.FastButton(this.$el.find('.back').get(0), this.back);

      return this;
    },
    getDetailsSuccess : function(collection) {
      this.docFragment = document.createDocumentFragment();
      if (collection.length > 0) {
        this.$el.find('ul').show();
        _.each(collection.models, this.appendDetail);
        this.$el.find('ul').append(this.docFragment);
        $.refreshScroll(this.$el);
      }
    },
    getDetailsError : function() {
      alert('Cannot connect to server');
    },
    appendDetail : function(detail, ind) {
      var view = new DetailView({
        model : detail
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
