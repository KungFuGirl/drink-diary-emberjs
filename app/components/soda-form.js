import Ember from 'ember';
const {
  set
} = Ember;

export default Ember.Component.extend({
  prompt: null,
  optionValuePath: 'value',
  optionLabelPath: 'label',
  store: Ember.inject.service( 'store' ),
  cancelOnCbClick: false,
  
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
        if (isDiet )
      this.set('soda.isDiet', true);
      }

   }
});