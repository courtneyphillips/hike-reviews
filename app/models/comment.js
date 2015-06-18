import DS from 'ember-data';

export default DS.Model.extend({
  hike: DS.belongsTo('hike', {async: true}),
  name: DS.attr('string'),
  text: DS.attr('string'),
  rating: DS.attr('string')
});
