import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    createPoll(poll) {
      this
        .get('store')
        .savePoll(poll)

      this
        .transitionTo('polls.poll', poll)
    }
  },

  model() {
    return this.get('store').createPoll()
  },

  store: Ember.inject.service()

});
