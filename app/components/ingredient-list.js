import Ember from 'ember';

export default Ember.Component.extend({
  ingredients: [{ name: 'carbonated water'}, { name: 'high fructose corn syrup' }, { name: 'caramel color'}, { name: 'phosphoric acid' }],
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

