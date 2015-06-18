import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string'),
  comment: DS.hasMany('comment', {async: true})
  // rating: null
});









 // newCart.set('pod', pod);
 //      newCart.save().then(function() {
 //        pod.get('carts').pushObject(newCart);    //saves to firebase but only will show up once.. need it with associations
 //        pod.save();
 //      });
