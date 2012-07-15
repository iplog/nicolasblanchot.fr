define(function() {
  Factory.define('detail')
    .sequence('id')
    .attr('activityId', 0)
    .attr('text', 'Detail text');

  return Factory;
});
