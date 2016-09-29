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
      setCountry(countryId) {
        console.log(countryId);
        // debugger;
        this.get('store').queryRecord('country', {filter:
            { id: countryId }
          }).then((countryObj)=>{
          console.log(countryObj);
           debugger;
          //this.set('soda.country', countryObj.objectAt(countryId));
        });

      //console.log(selectedCountry);
      //console.log(selectedCountry.get('name'));
      //this.set('soda.country', selectedCountry );
      },


      setDiet(isDiet) {
        console.log(isDiet);
        this.set('soda.isDiet', true);
      }

   }
});