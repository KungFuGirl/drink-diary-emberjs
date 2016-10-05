import Ember from 'ember';

export default Ember.Component.extend({
  selectedOptions: null,
  allOptions: null,
  listItemModel: null,
  isEditDefault: null,
  // isEdit changes whether the option list is displayed editable or not 
  isEdit: Ember.computed('isEditDefault', function() {
    if (Ember.get(this, 'isEditDefault')) {
      return true;
    } else {
      return false;
    }
  }),
  labelText: null,
  actions: {
    toggleEdit: function() {
      this.toggleProperty('isEdit');
    }
  }
});
