import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "fieldset",
  classNameBindings: ["classname"],  
  classname: null,
  selectElementId: null,
  label: null,
  value: null,
  models: null,
  actions: {
    selectAction(value, component){
      this.attrs.selectAction(value, component);
    }

  }
});
