import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ingredient-list-summary', 'Integration | Component | ingredient list summary', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ingredient-list-summary}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ingredient-list-summary}}
      template block text
    {{/ingredient-list-summary}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
