import Ember from 'ember';

export default Ember.Component.extend({
  ingredients: null,
  //FIXME: options need to be minus the already selected ones, probably needs to be computed for adding/removing the same option a few times
  ingredientOptions: null,
  actions: {
    createOnEnter: function() {
      // todo as part of #65
      // should consider coloring new ingredients differently to indicate they are going to be created
    },
    // don't prompt to create a new ingredient if there is an exact match to what is typed in
    hideCreateOptionOnSameName(term) {
      let existingOption = this.get('ingredientOptions').findBy('name', term);
        return !existingOption;
    }
  }
});

