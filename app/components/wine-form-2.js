import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service( 'store' ),
  init() {
    this._super(...arguments);
    this.set('countries', this.get('store').findAll('country'));
    this.set('wineTypes', this.get('store').findAll('wine-type'));
  }
});
