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
      _.bindAll(this, 'render');
    },
    render : function() {
      $(this.el).html(Mustache.to_html(this.template));
      return this;
    }
  });
});


// [{"name":"GuillaumePépy","points":523,"nbBages":7},{"name":"dotsMarc","points":517,"nbBages":9},{"name":"oduesp","points":482,"nbBages":6},{"name":"Plog","points":481,"nbBages":7},{"name":"DarkSkana","points":463,"nbBages":5},{"name":"adryma","points":442,"nbBages":6},{"name":"Tuture","points":404,"nbBages":4}]
