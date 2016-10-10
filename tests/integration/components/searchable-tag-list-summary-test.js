import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('searchable-tag-list-summary', 'Integration | Component | searchable tag list summary', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{searchable-tag-list-summary}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#searchable-tag-list-summary}}
      template block text
    {{/searchable-tag-list-summary}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
