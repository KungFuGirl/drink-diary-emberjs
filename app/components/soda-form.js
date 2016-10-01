import Ember from 'ember';
const {
  set
} = Ember;

export default Ember.Component.extend({
  store: Ember.inject.service( 'store' ),
  
  init() {
    this._super( ...arguments );
    set(this, 'countries', this.get('store').findAll('country'));
  },

  actions: {
      setCountry(country) {
        this.set('soda.country', country);
      },
      setDiet(value) {
        this.set('soda.isDiet', value);
      },
      setCaffeinated(value) {
        this.set('soda.isCaffeinated', value);
      },
      saveSoda(soda) {
        soda.save();
      }
   }
});