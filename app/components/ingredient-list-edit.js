import Ember from 'ember';

export default Ember.Component.extend({
  ingredients: null,
  allIngredientOptions: null,
  // what options are in the dropdown should not contain ingredients 
  // already selected
  currentIngredientOptions: Ember.computed('allIngredientOptions.[]', 'ingredients.[]', {
    get() {
      let allIngredients = this.get('allIngredientOptions');
      let ingredients = this.get('ingredients');
      // check for existence in "currentIngredients" by id, hopefully faster than Ember.Enumerable.contains but I would need to benchmark
      let currentIngredientIds = ingredients && allIngredients && ingredients.length ? ingredients.map(ingr => ingr.get('id')) : null;
     if(!currentIngredientIds) { 
        return allIngredients;
      } else {
        return allIngredients.reject(ingr => currentIngredientIds.contains(ingr.get('id')));
      }
    }
  }),
  actions: {
    createOnEnter: function() {
      // todo as part of #65
      // should consider coloring new ingredients differently to indicate they are going to be created
    },
    // don't prompt to create a new ingredient if there is an exact match to what is typed in
    hideCreateOptionOnSameName(term) {
      let existingOption = this.get('currentIngredientOptions').findBy('name', term);
        return !existingOption;
    }
  }
});

