import Ember from 'ember';

export default Ember.Component.extend({
  selectedOptions: null,
  allOptions: null,
  listItemModel: null, //will be used for #65 creating new objects  
  // what options are in the dropdown should not contain already 
  // selected options 
  currentOptions: Ember.computed('allOptions.[]', 'selectedOptions.[]', {
    get() {
      let allOptions = Ember.get(this, 'allOptions');
      let selectedOptions = Ember.get(this, 'selectedOptions');
      // check for existence in "currentOptions" by id, hopefully faster than 
      // Ember.Enumerable.contains but I would need to benchmark
      let currentOptionIds = selectedOptions && allOptions && selectedOptions.length ? selectedOptions.map(option => Ember.get(option, 'id')) : null;
     if(!currentOptionIds) { 
        return allOptions;
      } else {
        return allOptions.reject(option=> currentOptionIds.contains(Ember.get(option, 'id')));
      }
    }
  }),
  actions: {
    createOnEnter: function() {
      // todo as part of #65
      // should consider styling or coloring new tags/options differently to 
      // indicate they are going to be created
    },
    // don't prompt to create a new option if there is an exact match to what 
    // is typed in
    hideCreateOptionOnSameName(term) {
      let existingOption = Ember.get(this, 'currentOptions').findBy('name', term);
        return !existingOption;
    }
  }
});
