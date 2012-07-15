define(function() {
  Factory.define('activity')
    .sequence('id')
    .attr('title', 'activity title')
    .attr('date', 'Oct 2012')
    .attr('link', false)
    .attr('target', '')
    .attr('logo', '')
    .attr('cat', 0)
    .attr('description', 'activity description');

  return Factory;
});
