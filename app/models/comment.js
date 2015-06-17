import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  name: DS.attr('string'),
  hike: DS.belongsTo('hike', {async: true})
});
