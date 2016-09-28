import Ember from 'ember';

export default Ember.Component.extend({
  ingredients: [{ id: 1, name: 'carbonated water'}, { id: 2, name: 'high fructose corn syrup' }, { id: 3, name: 'caramel color'}, { id: 4,name: 'phosphoric acid' }],
  summaryOrEdit: "ingredient-list-summary",
  actions: {
    toggleEdit: function() {
      if (this.get('summaryOrEdit') === "ingredient-list-summary") {
        this.set('summaryOrEdit', 'ingredient-list-edit');
        console.log('toggled to edit');
      } else {
        this.set('summaryOrEdit', 'ingredient-list-summary');
        console.log('toggled to sum');
      }

    }
  }
});

