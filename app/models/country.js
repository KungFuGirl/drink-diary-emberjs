import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  states: DS.hasMany('state'),
  sodas: DS.hasMany('soda'),
  flavors: DS.hasMany('flavor')
});
