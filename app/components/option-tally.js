import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  percentage: computed('voteCount', 'totalVoteCount', function () {
    const voteCount = this.get("voteCount")
    const totalVoteCount = this.get("totalVoteCount")
    if (voteCount <= 0) {
      return 0;
    } else {
      return voteCount / totalVoteCount
    }
  }),

  progressStyle: computed('voteCount', 'totalVoteCount', function () {
    const voteCount = this.get("voteCount")
    const totalVoteCount = this.get("totalVoteCount")

    let width = 0;

    if (voteCount > 0) {
      width = voteCount / totalVoteCount * 100
    }

    return Ember.String.htmlSafe("width: " + width + "%");
  })
});
