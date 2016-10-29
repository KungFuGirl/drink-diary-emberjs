import Ember from 'ember';

export default Ember.Component.extend({
  
  colorsCollection: [ 
    { hexNum: "#FFFFFF", name: "Clear"},
    { hexNum: "#FFFF00", name: "Yellow"},
    { hexNum: "#FFA500", name: "Orange"},
    { hexNum: "#FFC0CB", name: "Pink"},
    { hexNum: "#C70039", name: "Cherry"},
    { hexNum: "#008000", name: "Green"},
    { hexNum: "#A52A2A", name: "Brown"},
    { hexNum: "#000000", name: "Black"}   
    ]

});
