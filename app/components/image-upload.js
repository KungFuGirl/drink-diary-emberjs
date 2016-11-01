import Ember from 'ember';

export default Ember.Component.extend({
  imgSrc: null,
  eventState: {},
  classNames: ['img-uploader'],
  init(){
    this._super(...arguments);

    this.set('resizeCanvas', document.createElement('canvas'));

    this.set('minWidth', 60);
    this.set('minHeight', 60);
    this.set('maxWidth', 800);
    this.set('maxHeight', 900);
  },
  didInsertElement(){
    // need element to be inserted into the dom
    this.initializeImageEl();
  },
  // get the original uploaded image and downsize it to be somewhat reasonable in size. This limits how much zooming will be possible for the cropped image. 
  // when this function (and its one time event listener) complete, is startingImg actually "cleaned up"?
  initializeImageEl(){
    var width, height;
    let imgSrc = this.get('imgSrc');
    let startingImg = new Image();
    this.preloadImage(startingImg) 
      .then(function(){
        // needs additional constraints to check if the image is too large at start, probably also should set some sensible upper and lower bounds
        // also, it might be possible to get image dimensions during upload, making all of this sort of not needed :D
        if (startingImg.height > startingImg.width) {
          height = window.screen.availHeight;
          width = Math.floor(height / startingImg.height * startingImg.width);
        } else {
          width = window.screen.availWidth;
          height = Math.floor(width / startingImg.height * startingImg.width);
        }
        this.set('resizeCanvas.width', width);
        this.set('resizeCanvas.height', height);
        this.get('resizeCanvas').getContext('2d').drawImage(startingImg, 0, 0, width, height);
        return(this.get('resizeCanvas').toDataURL("image/png"));
      }.bind(this))
      .then(function(resizedSrc){
        this.set('origSrc', resizedSrc);
        this.set('imageTarget', this.$('.resize-image')[0]);
        this.set('imageTarget.src', resizedSrc); 
      }.bind(this));
    startingImg.src = imgSrc; 
  },
  // images need to be loaded to get their dimensions
  preloadImage(startingImg) {
    var width, height;
    return new Promise(function(resolve, reject){
      startingImg.onload = () => {
        resolve();
      };
    });
  },
  resizeImage(width, height) {
    this.set('resizeCanvas.width', width);
    this.set('resizeCanvas.height', height);
    this.get('resizeCanvas').getContext('2d').drawImage(this.get('origSrc'), 0, 0, width, height);
    this.get('imageTarget').attr('src', this.get('resizeCanvas').toDataURL("image/png"));
  },
  actions: {
    saveEventState(e){ 
      this.set('eventState.containerWidth', this.$().width());
      this.set('eventState.containerHeight', this.$().height()); 
      this.set('eventState.containerLeft', this.$().offset().left); 
      this.set('eventState.containerRight', this.$().offset().right); 
      this.set('eventState.mouseX', e.originalEvent.pageX);
      this.set('eventState.mouseY', e.originalEvent.pageY);
      this.set('eventState.evnt', e);
    },
    resizing(e){
      let mouse={}, width, height, left, top, offset;
      offset = this.$().offset();
      mouse.x = e.originalEvent.pageX;
      mouse.y = e.originalEvent.pageY;
      width = mouse.x - this.get('eventState.containerLeft');
      // constrain proportions
      height = width / this.get('origSrc.width') * this.get('origSrc.height'); 
      left = this.get('eventState.containerLeft');
      top = this.get('eventState.containerTop');

      if( width > this.get('minWidth') &&
          height > this.get('minHeight') &&
          width < this.get('maxWidth') &&
          height < this.get('maxHeight')
        ){
          this.resizeImage(width, height);
          this.$().offset({'left': left, 'top': top});
      }
    }
  }
});
