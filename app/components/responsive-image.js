import Ember from 'ember';

export default Ember.Component.extend({
  photoUrl: Ember.computed('image', function() {
      if (this.get('image')) {
        return '';
      } else {
        return '/assets/images/placeholder.png';
      }
    })
  });
