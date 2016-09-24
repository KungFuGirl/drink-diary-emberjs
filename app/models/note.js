import DS from 'ember-data';

export default DS.Model.extend({
  text_note: DS.attr('string'),
  rating: DS.attr('integer'),
  // user: DS.belongsTo('user'),
  soda: DS.belongsTo('soda'),
  date: DS.attr('date'),
  sweetness_rating: DS.attr('integer'),
  purchase_location: DS.attr('string'),
  price: DS.attr('integer'),
  currency: DS.attr('string')
});
