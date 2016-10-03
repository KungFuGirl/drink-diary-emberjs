import Ember from 'ember';
import _ from 'underscore';
const {
  computed,
  get,
  set
} = Ember;

export default Ember.Component.extend({
  ingredients: null, 
  allIngredientOptions: null,
  // defaults and options for the select depend on whether or not we are viewing a soda, editing a soda, or creating a new soda

  /*
  currentIngredientOptions: computed('allIngredientOptions.[]', 'ingredients.[]', {
    get() {
      return _.difference(get(this,allIngredientOptions), get(this, ingredients));
    }
  }), 
  */
  isNew: true,
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
