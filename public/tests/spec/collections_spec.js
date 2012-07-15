define([
  'collections/categories',
  'collections/activities',
  'collections/details',
  'factory/category',
  'factory/activity',
  'factory/detail'
], function(Categories, Activities, Details) {
  describe('Tests categories collection', function() {
    var collection;

    beforeEach(function() {
      collection = new Categories();
    });

    it('Can add Model instances as objects and arrays.', function() {
        expect(collection.length).toBe(0);

        var model = Factory.build('category', {
          name : 'plop'
        });

        // it's not neccessary to create a complete model instance. Collection
        // is gonna do it for us :)
        collection.add(model);

        // how many categories have been added so far?
        expect(collection.length).toBe(1);

        var arr = [];
        arr.push(Factory.build('category', {
          name : 'Blah'
        }));
        arr.push(Factory.build('category', {
          name : 'Bleh'
        }));

        collection.add(arr);

        // how many are there in total now?
        expect(collection.length).toBe(3);
    });

    it('Should fetch data on a specific URL', function() {
      expect(collection.url).toBe('/categories');
    });
  });

  describe('Tests activities collection', function() {
    var collection;

    beforeEach(function() {
      collection = new Activities();
    });

    it('Can add Model instances as objects and arrays.', function() {
        expect(collection.length).toBe(0);

        var model = Factory.build('activity');

        // it's not neccessary to create a complete model instance. Collection
        // is gonna do it for us :)
        collection.add(model);

        // how many categories have been added so far?
        expect(collection.length).toBe(1);

        var arr = [];
        arr.push(Factory.build('activity', {
          title : 'argh'
        }));
        arr.push(Factory.build('activity', {
          title : 'brrr'
        }));

        collection.add(arr);

        // how many are there in total now?
        expect(collection.length).toBe(3);
    });
    it('Should fetch data on a specific URL', function() {
      expect(collection.url).toBe('/activities');
    });
  });


  describe('Tests details collection', function() {
    var collection;

    beforeEach(function() {
      collection = new Details();
    });

    it('Can add Model instances as objects and arrays.', function() {
        expect(collection.length).toBe(0);

        var model = Factory.build('detail');

        // it's not neccessary to create a complete model instance. Collection
        // is gonna do it for us :)
        collection.add(model);

        // how many categories have been added so far?
        expect(collection.length).toBe(1);

        var arr = [];
        arr.push(Factory.build('detail'));
        arr.push(Factory.build('detail'));
        arr.push(Factory.build('detail'));

        collection.add(arr);

        // how many are there in total now?
        expect(collection.length).toBe(4);
    });
    it('Should fetch data on a specific URL', function() {
      expect(collection.url).toBe('/details');
    });
  });
});
