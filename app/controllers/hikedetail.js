import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['hikenew'],
  selectContentType: [{label: "easy", value: "easy"}, {label: "medium", value: "medium"},{label: "difficult", value: "difficult"}],
  selectedContentType: null,

  actions: {
    newcomment: function() {
      var comment = this.store.createRecord('comment', {
        name: this.get('name'),
        text: this.get('text'),
        rating: this.get('selectedContentType.value'),

      });
      this.set("name", "");
      this.set("text", "");
      var hike = this.get("model");
      comment.save().then(function() {
        hike.get('comment').pushObject(comment);
        hike.save();

      });
      debugger;
      this.transitionToRoute('hikedetail', hike);
    }

    // commentCount: function() {
    //   var comments =
    //   var count = 0;
    //
    // }
  }
});
