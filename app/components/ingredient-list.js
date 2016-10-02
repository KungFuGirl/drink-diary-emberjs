import Ember from 'ember';

export default Ember.Component.extend({
  ingredients: [{ id: 1, name: 'carbonated water'}, { id: 2, name: 'high fructose corn syrup' }, { id: 3, name: 'caramel color'}, { id: 4,name: 'phosphoric acid' }, {id: 5, name: "natural flavors"}, {id: 6, name: "caffeine"}],
  ingredientOptions: [{ id: 1, name: 'carbonated water'}, { id: 2, name: 'high fructose corn syrup' }, { id: 3, name: 'caramel color'}, { id: 4,name: 'phosphoric acid' }, {id: 5, name: "natural flavors"}, {id: 6, name: "caffeine"}, {id:7, name: "apple juice"}, {id: 8, name: "blackberries"}, {id:9, name: "cane sugar"}, {id:10, name: "the tears of a newborn"}],
  isEdit: false,
  ingredientsLabel: "ingredients",
  actions: {
    toggleEdit: function() {
      this.toggleProperty('isEdit');
    }
  }
});

