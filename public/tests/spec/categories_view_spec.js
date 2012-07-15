define([
  'views/CategoriesView',
  'collections/Categories',
  'factory/category'
], function(CategoriesView, Categories) {

  describe('Tests for CategoriesView functions', function() {
    beforeEach(function() {
      var div = $('<div>').attr('id', 'appContainer');
      $('body').append(div);

      this.collection = new Categories();
      this.view = new CategoriesView({
        collection: this.collection
      });
    });

    afterEach(function() {
        this.view.remove();
        $('ul').remove();
    });

    it('Should be tied to a DOM element when created, based off the property provided.', function() {
      //what html element tag name represents this view?
      expect(this.view.el.tagName.toLowerCase()).toBe('div');
      expect(this.view.$el).toHaveId('appContainer');
    });

    it('Is backed by a collection which provides the data.', function() {
      expect(this.view.collection).toBeDefined();
    });

    it('Should set scroll when rendering', function() {
      spyOn($, 'setupScroll');
      spyOn(this.collection, 'fetch').andCallFake(function() {});

      this.view.render();
      expect($.setupScroll).toHaveBeenCalled();
    });

    it('Should load data if collection is empty when rendering', function() {
      // check that collection is empty
      expect(this.view.collection.length).toBe(0);

      // check that collection fetch method is called
      // spy on this.collection.fetch;
      spyOn(this.collection, 'fetch').andCallFake(function() {});
      this.view.render();
      expect(this.collection.fetch).toHaveBeenCalled();
    });

    it('Should not load data if collection is not empty when rendering',
      function() {
      this.collection.add(Factory.build('category', {
        name : 'blah'
      }));
      this.collection.add(Factory.build('category', {
        name : 'plop'
      }));

      // check that collection is not empty
      expect(this.view.collection.length).toBe(2);

      // check that collection fetch method is not called
      // spy on this.collection.fetch;
      spyOn(this.collection, 'fetch').andCallFake(function() {});
      this.view.render();
      expect(this.collection.fetch).not.toHaveBeenCalled();
    });

    it('Should call a method to dipslay data (when collection is emtpy)',
      function() {
      // check that collection is empty
      expect(this.view.collection.length).toBe(0);

      spyOn(this.collection, 'fetch').andCallFake(function(options) {
        options.success();
      });
      spyOn(this.view, 'getCategoriesSuccess');

      this.view.render();
      expect(this.view.getCategoriesSuccess).toHaveBeenCalled();
    });

    it('Should call a method to dipslay data (when collection is not emtpy)',
      function() {
      this.collection.add(Factory.build('category', {
        name : 'blah'
      }));
      this.collection.add(Factory.build('category', {
        name : 'plop'
      }));

      // check that collection is not empty
      expect(this.view.collection.length).toBe(2);

      spyOn(this.view, 'getCategoriesSuccess');

      this.view.render();
      expect(this.view.getCategoriesSuccess).toHaveBeenCalled();
    });

    it('Should call appendCategory metod, append data and refresh scroll',
      function() {

      this.collection.add(Factory.build('category', {
        name : 'blah'
      }));
      this.collection.add(Factory.build('category', {
        name : 'plop'
      }));
      expect(this.collection.length).toBe(2);

      // check that a Dom fragement has been created
      spyOn(document, 'createDocumentFragment');
      spyOn(this.view, 'appendCategory');
      spyOn($, 'refreshScroll');

      this.view.getCategoriesSuccess(this.collection);

      expect(document.createDocumentFragment).toHaveBeenCalled();
      expect(this.view.appendCategory).toHaveBeenCalled();
      expect($.refreshScroll).toHaveBeenCalled();
    });

    it('Should append each category in collection', function() {
      this.view.docFragment = document.createDocumentFragment();

      this.collection.add(Factory.build('category', {
        name : 'blah'
      }));
      this.collection.add(Factory.build('category', {
        name : 'plop'
      }));
      expect(this.collection.length).toBe(2);


      spyOn(this.view.docFragment, 'appendChild');
      var iterate = function(model, ind) {
        this.view.appendCategory(model);
        expect(this.view.docFragment.appendChild).toHaveBeenCalled();
      };

      _.each(this.collection.models, _.bind(iterate, this));
    });
  });
});
