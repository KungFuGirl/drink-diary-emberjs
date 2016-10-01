import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  brand: DS.attr('string'),
  parentCompany: DS.attr('string'),
  originData: DS.attr('string'),
  country: DS.belongsTo('country'),
  isDiet: DS.attr('boolean'),
  isCaffeinated: DS.attr('boolean'),
  color: DS.attr('string'),
  // creator: DS.belongsTo('creator'),
  // lastEditor: DS.belongsTo('last-editor'),
  // photos: DS.hasMany('photo'),
  notes: DS.hasMany('note')
});

