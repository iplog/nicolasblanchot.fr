define(function() {
  Factory.define('category')
    .sequence('id')
    .attr('name', 'category test name');

  return Factory;
});
