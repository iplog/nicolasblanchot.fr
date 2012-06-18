define([
  'text!templates/CategoriesTmpl.html',
  'views/CategoryView'
], function(
  Tmpl,
  CategoryView
) {
  return Backbone.View.extend({
    el: 'body',
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
        title : 'My resume'
      };
      $(this.el).html(Mustache.to_html(this.template, data));
      this.collection.fetch({
        success: this.getCategoriesSuccess,
        error: this.getCategoriesError
      });
      return this;
    },
    getCategoriesSuccess : function(collection) {
      this.docFragment = document.createDocumentFragment();
      _.each(collection.models, this.appendCategory);
      this.$el.find('ul').append(this.docFragment);
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


// [{"name":"GuillaumePépy","points":523,"nbBages":7},{"name":"dotsMarc","points":517,"nbBages":9},{"name":"oduesp","points":482,"nbBages":6},{"name":"Plog","points":481,"nbBages":7},{"name":"DarkSkana","points":463,"nbBages":5},{"name":"adryma","points":442,"nbBages":6},{"name":"Tuture","points":404,"nbBages":4}]
