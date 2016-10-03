import Ember from 'ember';
import _ from 'underscore';

export default Ember.Component.extend({
  ingredients: null,
  allIngredientOptions: null,
  currentIngredientOptions: Ember.computed('allIngredientOptions.[]', 'ingredients.[]', {
    get() {
      let allIngredients = this.get('allIngredientOptions');
      let ingredients = this.get('ingredients');
      let currentIngredientIds = _.pluck(ingredients, 'id');
      if(_.isEmpty(ingredients) || _.isNull(ingredients) || _.isUndefined(ingredients)) {
        return allIngredients;
      } else {
        //doesn't work because the underscore library is just a shim, and doesn't work with ember arrays or enumerables, only with pojos
        let foo =  _.reject(allIngredients, function(ingredientOption) {
          return _.contains(currentIngredientIds, ingredientOption.get(id));
          // or
          // return _.findWhere(ingredients, currentIngredient);
          // seems faster to do a check on ids, but I should benchmark it
        });
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

