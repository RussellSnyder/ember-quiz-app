import Service from '@ember/service';
import Option from '../models/option'
import Poll from '../models/poll'
import Vote from '../models/vote'


const polls = [];


let poll = Poll.create({
  id: '1',
  options: [],
  prompt: 'What do you look like?',
  votes: []
});


poll.get('options').pushObjects([
  Option.create({id: 1, label: 'Skinny white dude', poll: poll}),
  Option.create({id: 2, label: 'Super buff mofo', poll: poll}),
  Option.create({id: 3, label: 'Mediterranean and medium height', poll: poll}),
  Option.create({id: 4, label: 'Echt Deutche', poll: poll}),
])

polls.pushObject(poll);


poll = Poll.create({
  id: '2',
  options: [],
  prompt: 'How much money do you have?',
  votes: []
});


poll.get('options').pushObjects([
  Option.create({id: 1, label: 'Love is the only currency I need', poll: poll}),
  Option.create({id: 2, label: 'Not a lot but I don\'t have debt', poll: poll}),
  Option.create({id: 3, label: 'In debt but working to get out', poll: poll}),
  Option.create({id: 4, label: 'Enough money to take care of both of us if needed', poll: poll}),
])

polls.pushObject(poll);


export default Service.extend({
  saveVote(vote) {
    const poll = vote.get('poll')
    poll.get('votes').pushObject(vote)
  },
  createVote(poll) {
        return Vote.create({
          poll: poll
        })
  },
  findAllPolls() {
    return polls;
  },
  findPoll(id) {
    return this.findAllPolls().findBy('id', id)
  },
  createPoll() {
    const poll = Poll.create({
      options: [],
      votes: []
    })
    poll.get('options').pushObjects([
      Option.create({poll}),
      Option.create({poll}),
      Option.create({poll})
    ])
    return poll
  },
  savePoll(poll) {
    polls.pushObject(poll);
    poll.set('id', polls.length)
  }

});
