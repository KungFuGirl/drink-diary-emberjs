import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  wineRegion: DS.belongsTo('wine-region'),
  state: DS.belongsTo('state'),
  wines: DS.hasMany('wine')
});
