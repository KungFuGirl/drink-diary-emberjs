import Ember from 'ember';

export default Ember.Component.extend({
  ingredients: [{ id: 1, name: 'carbonated water'}, { id: 2, name: 'high fructose corn syrup' }, { id: 3, name: 'caramel color'}, { id: 4,name: 'phosphoric acid' }],
  summaryOrEdit: "summary",
  actions: {
    toggleEdit: function() {
      if (this.get('summaryOrEdit') === "summary") {
        this.set('summaryOrEdit', 'edit');
        console.log('toggled to edit');
      } else {
        this.set('summaryOrEdit', 'summary');
        console.log('toggled to sum');
      }

    }
  }
});

