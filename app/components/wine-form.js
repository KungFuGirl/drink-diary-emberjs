import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service( 'store' ),
  init() {
    this._super(...arguments);
    this.get('store').findAll('country').then(
      (returnedCountries) => { 
        this.set('countries', returnedCountries);
      }, null, "GET countries");
    this.get('store').findAll('wine-type').then(
      (returnedWineTypes) => { 
        this.set('wineTypes', returnedWineTypes);
      }, null, "GET wineTypes");
    this.set('appellationOptionsFiltered', null);
  },
  actions: {
    setCountry(country, component) {
      this.set('wine.country', country);
      this.set('wine.state', null);
      this.set('wine.wineRegion', null);
      if (country) {
        country.get('states').then(
          (states)=>{
            this.set('states', states);
          }, null, "GET country.states inside setCountry");
        country.get('wineRegions').then(
          ( regions ) => {
            this.set( 'wineRegions', regions);
          }, null, "GET country.wineRegions inside getCountry");
      }
    },
    setState(state, component) {
      state.get( 'wineRegions' ).then(
        (regions) => {
          this.set('wineRegions', regions);
        }, null, "GET state.wineRegions");
    },
    setWineRegion(region, component) {
    },
    setAppellation(region, component) {
    },
    setWineType(type, component) {
    }
  },
  stateOptionsFiltered: Ember.computed('states.[]', 'wine.wineRegion', {
    get() {
      this.get('wine.wineRegion').then((region)=>{
        if(region){
          // this properly sets state on wine, but doesn't update the ui's selected value
          // if region is set on wine, we know the state (if it exists) and can set it automatically
          region.get('state').then((state)=>{
            this.set('wine.state', state);
          });
        } 
        return this.get('states');
      }, null, "get wine region inside stateOptionsFiltered")
    }
  }),
  wineRegionOptionsFiltered: Ember.computed('wineRegions.[]', 'wine.state', {
    get() {
      this.get('wine.state').then((state)=>{
        if (state) {
          // this does not work
          // should be updating the regions dropdown with only the state's wine regions
          console.log("should be updating regions to state's regions");
          return state.get('wineRegions');
        } else {
          return this.get('wineRegions');
        }
      }, (err)=>{console.log("you have an error")}, "get state.wineRegions in wineRegionOptionsFiltered");
    // this is getting called too often - it should be only called once when something it watches changes, but I see it being called twice when I put in a debugger statement.
    }
  }) // wineRegionOptionsFiltered
}); 
