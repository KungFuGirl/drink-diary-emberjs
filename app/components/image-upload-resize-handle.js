import Ember from 'ember';

//somehow need to constrain dragging to the available screen space

export default Ember.Component.extend({
  isDragging: false,
  mouseDown(){
//    this.saveEventState();
//    console.log("mouseDown");
//    this.set('isDragging', true);
    this.get('actions.foobar')();
    //console.log("dragging: " + this.get('isDragging'));
  },
  mouseUp(){
//    console.log("mouseUp");
//    this.set('isDragging', false);
  },
  mouseOut(){
    
    this.set('isDragging', false);
  },
  mouseMove(){
    console.log("mouseMove");
  },
  saveEventState(){
    console.log("saveEventState");
  },
  actions: {
    foobar() {
      console.log('you are in foobar');
    }
  }
});
