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
      setCountry(country, component) {
      this.set('soda.country', country);
      },


      setDiet(isDiet, component) {
        console.log(isDiet);
        this.set('soda.isDiet', true);
      }

   }
});