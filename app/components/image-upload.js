import Ember from 'ember';

export default Ember.Component.extend({
  imgSrc: null,
  eventState: {},
  classNames: ['img-uploader'],
  init(){
    this._super(...arguments);
    this.set('min_width', 60);
    this.set('min_height', 60);
    this.set('max_width', 800);
    this.set('max_height', 900);
    this.set('orig_src', new Image());
    this.set('orig_src.src', this.get('img_src'));
    this.set('resize_canvas', document.createElement('canvas'));
  },
  actions: {
    saveEventState(){ 
      console.log("saveEventState in parent");
    }
  }
});
