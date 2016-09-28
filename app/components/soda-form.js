import Ember from 'ember';
const {
  set
} = Ember;

export default Ember.Component.extend({
  prompt: null,
  optionValuePath: 'value',
  optionLabelPath: 'label',
  store: Ember.inject.service( 'store' ),
  init() {
    this._super( ...arguments );
    set(this, 'countries', this.get( 'store' ).findAll( 'country' ));
  },
  actions: {
    change: function () {
      let selectedIndex = this.$('select')[0].selectedIndex;
      let countries = this.get('countries');
      
      // decrement index by 1 if we have a prompt
      let hasPrompt = !!this.get('prompt');
      let countryIndex = hasPrompt ? selectedIndex - 1 : selectedIndex;
      let _selection = country[countryIndex];
  
      this.sendAction('willChangeAction', _selection);

      if (this.get('optionValuePath')) {
        this.set('selection', _selection[this.get('optionValuePath')]);
      } else {
        this.set('selection', _selection);
      }

      this.sendAction('didChangeAction', _selection);
    }
  }
});