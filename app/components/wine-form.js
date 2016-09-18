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
  stateOptionsFiltered: computed('states.[]', 'currentWineRegion', {
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
  }),
  wineRegionOptionsFiltered: computed('wineRegions.[]', 'currentState', {
    get() {
      if (get(this, 'currentState')) {
        return get(this, "currentState.wineRegions");
      } else {
        return get(this, 'wineRegions');
      }
    }
  }),
  appellationOptionsFiltered: computed('currentWineRegion', 'currentState', {
    get() {
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
    }
  }),
  actions: {
    setWineType(value, component) {
      this.set('wine.wineType', value);
    },
    setCountry(country, component) {
      this.set( 'wine.country', country );
      // TODO: all fields need to handle being unset gracefully
      if(country){
        // TODO: can I do just one request to get the related records? Currently it makes one request per association
        let countryStates = country.get('states');
        this.set('states', countryStates);
        let countryWineRegions = country.get('wineRegions');
        this.set('wineRegions', countryWineRegions);
      }
      this.set('currentCountry', country);
      // TODO: ask jake if there is a better way to do this?
      this.set('currentState', null);
      this.set('currentWineRegion', null);
      this.set('currentAppellation', null);
    },
    setState(state, component) {
      this.set('wine.state', state);
      this.set('currentState', state);
      // reset appellation if it is set
      this.set('currentAppellation', null);
    },
    setWineRegion(region, component) {
      //TODO: when setting the wine region, the state dropdown should automatically select the proper state. The rest of the states should still display in the dropdown insetad of disappearing as they do now.
      this.set('wine.wineRegion', region);
      this.set('currentWineRegion', region);
      // reset appellation if it is set
      this.set('currentAppellation', null);
    },
    setAppellation(appellation, component) {
      this.set('currentAppellation', appellation);
      //TODO: should check to see if state/wine region are properly set and align them if they are not
      this.set('wine.appellation');
    }
  }
});
