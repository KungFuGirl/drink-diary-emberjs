import Ember from 'ember';
const {
  computed,
  get,
  set
} = Ember;

export default Ember.Component.extend({
  ingredients: null, 
  allIngredientOptions: null,
  // isEdit changes whether the ingredients are displayed editable or not 
  isEdit: function() {
    if (get(this, 'isNew')) {
      return true;
    } else {
      return false;
    }
  },
  ingredientsLabel: "ingredients",
  actions: {
    toggleEdit: function() {
      this.toggleProperty('isEdit');
    }
  }
});
