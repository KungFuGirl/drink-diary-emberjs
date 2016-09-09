import DS from 'ember-data';
import Ember from 'ember';
import ENV from "../config/environment";
const { underscore, pluralize } = Ember.String;

export default DS.JSONAPIAdapter.extend({
  host: ENV.host,
  pathForType: function(type) {
    let underscored = underscore(type);
    return  pluralize(underscored);
  }
});
