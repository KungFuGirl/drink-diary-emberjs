import Ember from 'ember';
const {
  set,
  get
} = Ember;

export default Ember.Component.extend({
  store: Ember.inject.service( 'store' ),
  
  init() {
    this._super( ...arguments );
    get(this, 'store').findAll('country').then((countries)=>{
      this.set('countries', countries);
    }),
    get(this, 'store').findAll('ingredient').then((ingredients)=> {
      this.set('allIngredientOptions', ingredients);
    })
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
