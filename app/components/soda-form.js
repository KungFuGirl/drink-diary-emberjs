import Ember from 'ember';
const {
  set
} = Ember;

export default Ember.Component.extend({
  store: Ember.inject.service( 'store' ),
  
  isDiet: false,
  init() {
    this._super( ...arguments );
    set(this, 'countries', this.get( 'store' ).findAll( 'country' ));
  },

  actions: {
      setCountry(country) {
        console.log(country);
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
        console.log(soda);
      }
   }
});