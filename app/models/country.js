import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  wines: DS.hasMany('wine'),
  states: DS.hasMany('state'),
  wineRegions: DS.hasMany('wine-region'),
  sodas: DS.hasMany('soda'),
  flavors: DS.hasMany('flavor')
});
