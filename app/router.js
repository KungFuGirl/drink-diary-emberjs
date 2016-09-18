import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('wine', { path: '/wines/:wine_id' }, function() {});
  this.route('country');
  this.route('state');

  this.route('wines', function() {
    this.route('new');
  });
});

export default Router;
