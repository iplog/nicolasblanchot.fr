define([
  'text!templates/CategoriesTmpl.html',
  'views/CategoryView'
], function(
  Tmpl,
  CategoryView
) {
  return Backbone.View.extend({
    el: '#appContainer',
    tagName : 'div',
    id : 'categories',
    className : 'viewWrapper',
    events : {},
    template : Tmpl,
    initialize : function() {
      _.bindAll(this, 'render', 'getCategoriesSuccess', 'appendCategory');
    },
    render : function() {
      var data = {
        title : 'my resume'
      };
      this.$el.html(Mustache.to_html(this.template, data));
      $.setupScroll(this.$el);
      if (this.collection.length === 0) {
        this.collection.fetch({
          success: this.getCategoriesSuccess,
          error: this.getCategoriesError
        });
      } else {
        this.getCategoriesSuccess(this.collection);
      }

      return this;
    },
    getCategoriesSuccess : function(collection) {
      this.docFragment = document.createDocumentFragment();
      _.each(collection.models, this.appendCategory);
      this.$el.find('ul').append(this.docFragment);
      $.refreshScroll(this.$el);
    },
    getCategoriesError : function() {
      alert('Cannot connect to server');
    },
    appendCategory : function(cat, ind) {
      var view = new CategoryView({
        model : cat
      });
      this.docFragment.appendChild(view.render().el);
    }
  });
});
