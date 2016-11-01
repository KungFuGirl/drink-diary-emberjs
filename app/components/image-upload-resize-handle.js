import Ember from 'ember';

//somehow need to constrain dragging to the available screen space

export default Ember.Component.extend({
  drag(e){
    // also could be this.sendAction('onDragResize', e);
    // may prefer this and switch to it as it seems more explicit
    this.get('onDragResize')(e);
  },
  dragStart(e){
    this.get('onStartResize')(e);
  }
});
