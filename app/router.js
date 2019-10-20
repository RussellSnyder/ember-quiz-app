import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('polls', function() {
    this.route('poll', {
      path: ":path_id"
    }, function() {
      this.route('results');
    })
  })
});

export default Router;
