import Ember from 'ember';
const {
  computed,
  get,
  set
} = Ember;

export default Ember.Component.extend({
  ingredients: null,
  allIngredientOptions: null,
  isEditDefault: null,
  // isEdit changes whether the ingredients are displayed editable or not 
  isEdit: Ember.computed('isEditDefault', function() {
    if (get(this, 'isEditDefault')) {
      return true;
    } else {
      return false;
    }
  }),
  ingredientsLabel: "ingredients",
  actions: {
    toggleEdit: function() {
      this.toggleProperty('isEdit');
    }
  }
});
