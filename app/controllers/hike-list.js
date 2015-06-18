import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['hikedetail'],
  actions: {
    sortHikes: function() {
      var hike = this.store.find('hike');
      // var comments = this.store.find('comment');
      return comments.length;
    }
  }

});
