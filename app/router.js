import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('country');
  this.route('state');

  this.route('sodas', function() {
    this.route('new');
  });
  this.route('soda', { path: '/sodas/:soda_id' }, function() {});
});

export default Router;
