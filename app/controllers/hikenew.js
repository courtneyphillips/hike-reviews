import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      var newHike = this.store.createRecord('hike', {
        name: this.get('name'),
        description: this.get('description'),
        location: this.get('location')

      });
      newHike.save();
      this.transitionToRoute('hike-list');
    }
  }
});
