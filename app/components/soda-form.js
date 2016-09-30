import Ember from 'ember';
const {
  get,
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
      // setCountry(countryId) {
      //   this.set('soda.country', this.get('store').peekRecord('country', countryId));
      // },
      setCountry(country) {
        console.log(country);
        this.set('soda.country', country);
      },
      // setDiet needs work
      setDiet(isDiet) {
        console.log(isDiet);
        this.set('soda.isDiet', true);
      }

   }
});