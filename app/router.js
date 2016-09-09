import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('wine', { path: '/wine/:wine_id' });
  this.route('country');
  this.route('state');
});

export default Router;
