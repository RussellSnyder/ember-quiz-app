import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findPoll(params.path_id)
  },
  store: Ember.inject.service()
});
