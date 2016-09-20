import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service( 'store' ),
  init() {
    this._super(...arguments);
    this.set('countries', this.get('store').findAll('country'));
    this.set('wineTypes', this.get('store').findAll('wine-type'));
    this.set('appellationOptionsFiltered', null);
  },
  actions: {
    setCountry(country, component) {
      this.set('wine.country', country);
      this.set('wine.state', null);
      this.set('wine.wineRegion', null);
      // can't set relationships if the records arent all loaded into the store
      // https://guides.emberjs.com/v2.8.0/models/relationships/#toc_creating-records
      country.get('states').then(
        (states)=>{this.set('states', states);}
      );
      country.get('wineRegions').then(
        (regions)=>{this.set('wineRegions', regions);}
      );
    },
    setState(state, component) {

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
          this.set('wine.state', region.get('state'));
        }
      });
      return this.get('states');
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
        } 
      });
      console.log("wine region optons, no state")
      // this is getting called too often - it should be only called once when something it watches changes.
      return this.get('wineRegions');
    }
  }) // wineRegionOptionsFiltered
}); 
