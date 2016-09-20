
import Ember from 'ember';
const {
  computed,
  get,
  set
} = Ember;
export default Ember.Component.extend({
  store: Ember.inject.service( 'store' ),
  init() {
    this._super( ...arguments );
    set(this, 'countries', this.get( 'store' ).findAll( 'country' ));
    set(this, 'wineTypes', this.get( 'store' ).findAll( 'wine-type' ));
  },
  /*
  // https://gist.github.com/lovasoa/3361645
  arrIntersection: function () {
    var i, all, shortest, nShortest, n, len, ret = [], obj={}, nOthers;
    nOthers = arguments.length-1;
    nShortest = arguments[0].length;
    shortest = 0;
    for (i=0; i<=nOthers; i++){
      n = arguments[i].length;
      if (n<nShortest) {
        shortest = i;
        nShortest = n;
      }
    }

    for (i=0; i<=nOthers; i++) {
      n = (i===shortest)?0:(i||shortest); //Read the shortest array first. Read the first array instead of the shortest
      len = arguments[n].length;
      for (var j=0; j<len; j++) {
        var elem = arguments[n][j];
        if(obj[elem] === i-1) {
          if(i === nOthers) {
            ret.push(elem);
            obj[elem]=0;
          } else {
            obj[elem]=i;
          }
        }else if (i===0) {
          obj[elem]=0;
        }
      }
    }
    return ret;
  },
  stateOptionsFiltered: computed('states.[]', 'wine.wineRegion', {
    get() {
      console.log("inside stateOptionsFiltered");
      if (get(this, 'wine.wineRegion.id')) {
        set(this, 'wine.state',  get(this, 'wine.wineRegion.state'));
        //set(this, 'currentState', get(this, 'wine.state'));
      }
      return  get(this, 'states');
    }
    /*
    get() {
      if (get(this, 'currentWineRegion')) {
        // a wine region only has one state
        // TODO: this works, but the state is not selected. Instead, it goes to the default "pleaes choose"
        let regionState = get(this, "currentWineRegion.state");
        return [regionState];
      } else {
        // returns all states for the country
        return get(this, 'states');
      }
    }
    */
  }),
  wineRegionOptionsFiltered: computed('wineRegions.[]', 'wine.state', {
    get() {
//      console.log("wine.state");
//      console.log(get(this, 'wine.state'));
//      console.log("that was wine.state");
//      debugger;
      console.log("inside wineRegionOptionsFiltered");
      if (get(this, 'wine.state.id')) {
        return get(this, "wine.state.wineRegions");
      } else {
        return get(this, 'wineRegions');
      }
 /*     if (get(this, 'currentState')) {
        return get(this, "currentState.wineRegions");
      } else {
        return get(this, 'wineRegions');
      }
      */
    }
  }),
  appellationOptionsFiltered: computed('wine.wineRegion', 'wine.state', {
    get() {
      console.log("inside appellationOptionsFiltered");
      /*
      let state = get(this, 'currentState');
      let region = get(this, 'currentWineRegion');
      if (state && region){
        return this.arrIntersection(state.appellations, region.appellations); 
        console.log('in the intersection');
        console.log('**********');
      } else if (state) {
        console.log('in the state');
        return get(state, 'appellations');
      } else if (region) {
        console.log('in the region');
        return get(region, 'appellations');
      } 
      */
    }
  }),
  actions: {
    setWineType(value, component) {
      this.set('wine.wineType', value);
    },
    setCountry(country, component) {
      console.log("***");
      console.log("inside setCountry");
      console.log("***");
      this.set( 'wine.country', country );
      // TODO: all fields need to handle being unset gracefully
      if(country){
        // TODO: can I do just one request to get the related records? Currently it makes one request per association
        let countryStates = country.get('states');
        this.set('states', countryStates);
        let countryWineRegions = country.get('wineRegions');
        this.set('wineRegions', countryWineRegions);
      }
      //this.set('currentCountry', country);
      // TODO: ask jake if there is a better way to do this?
      //this.set('currentState', null);
      //this.set('currentWineRegion', null);
      //this.set('currentAppellation', null);
    },
    setState(state, component) {
      console.log("***");
      console.log("inside setState");
      console.log("***");
      this.set('wine.state', state);
      //this.set('currentState', state);
      // reset appellation if it is set
      this.set('wine.appellation', null);
    },
    setWineRegion(region, component) {
      //TODO: when setting the wine region, the state dropdown should automatically select the proper state. The rest of the states should still display in the dropdown insetad of disappearing as they do now.
      console.log("***");
      console.log("inside setWineRegion");
      console.log("***");
      // if state is not set, attempt to set it
      if (!(this.get('wine.state.id'))) {
        this.set('wine.state', region.state);
      }
      this.set('wine.wineRegion', region);
      if (this.get('wine.appellation.id')) {
        this.set('wine.appellation', null);
      }
      //this.set('currentWineRegion', region);
      // reset appellation if it is set
      //this.set('currentAppellation', null);
    },
    setAppellation(appellation, component) {
      console.log("***");
      console.log("inside setAppellation");
      console.log("***");
      //this.set('currentAppellation', appellation);
      //TODO: should check to see if state/wine region are properly set and align them if they are not
      this.set('wine.appellation');
    }
  }
});
