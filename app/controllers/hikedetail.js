import Ember from 'ember';

export default Ember.Controller.extend({
  // needs: ['hike'],
  actions: {
    newComment: function() {
      var newComment = this.store.createRecord('comment', {
        name: this.get('name'),
        text: this.get('text')
      });
      newComment.save();

            // var hike = this;
            // hike.get('comments').pushObject(newComment);
            // this.set('name', '');
            // this.set('text', '');
            // hike.save();
      this.transitionToRoute('hikedetail');
    }
  }

});
