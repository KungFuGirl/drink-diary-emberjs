import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "fieldset",
  classNameBindings: ["classname"],  
  defaultValue: null,
  classname: null,
  selectElementId: null,
  label: null,
  modelAttr: null,
  models: null,
  actions: {
    selectAction(value, component){
      this.attrs.selectAction(value, component);
    }

  }
});
