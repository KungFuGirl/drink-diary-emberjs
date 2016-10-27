import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('image-upload-resize-handle', 'Integration | Component | image upload resize handle', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{image-upload-resize-handle}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#image-upload-resize-handle}}
      template block text
    {{/image-upload-resize-handle}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
