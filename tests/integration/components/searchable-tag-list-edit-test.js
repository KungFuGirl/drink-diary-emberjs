import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('searchable-tag-list-edit', 'Integration | Component | searchable tag list edit', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{searchable-tag-list-edit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#searchable-tag-list-edit}}
      template block text
    {{/searchable-tag-list-edit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
