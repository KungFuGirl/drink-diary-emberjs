import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  wines: DS.hasMany('wine'),
  countries: DS.hasMany('country'),
  state: DS.belongsTo('state'),
  appellations: DS.hasMany('appellation')
});
