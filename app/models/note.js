import DS from 'ember-data';

export default DS.Model.extend({
  textNote: DS.attr('string'),
  rating: DS.attr('integer'),
  // user: DS.belongsTo('user'),
  soda: DS.belongsTo('soda'),
  date: DS.attr('date'),
  sweetnessRating: DS.attr('integer'),
  purchaseLocation: DS.attr('string'),
  price: DS.attr('integer'),
  currency: DS.attr('string')
});
