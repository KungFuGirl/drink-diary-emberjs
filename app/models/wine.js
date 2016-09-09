import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  producer: DS.attr('string'),
  country: DS.belongsTo('country'),
  wineType: DS.belongsTo('wine-type'),
  wineRegion: DS.belongsTo('wine-region'),
  state: DS.belongsTo('state'),
  appellation: DS.belongsTo('appellation')
});
