import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  country: DS.belongsTo('country'),
  wineRegions: DS.hasMany('wine-region'),
  appellations: DS.hasMany('appellation'),
  wines: DS.hasMany('wine')
});
