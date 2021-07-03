import { createStore } from 'vuex'

export default createStore({
  state: {
    // store the data of our app
    thoughts: [] as String[],
    reactionList: [
      {
        id: 1,
        reaction: 'like',
        icon: require('../assets/like.png'),
        counter: localStorage.getItem('like')
          ? Number(localStorage.getItem('like'))
          : 0,
      },
      {
        id: 2,
        reaction: 'dislike',
        icon: require('../assets/dislike.png'),
        counter: localStorage.getItem('dislike')
          ? Number(localStorage.getItem('dislike'))
          : 0,
      },
      {
        id: 3,
        reaction: 'heart',
        icon: require('../assets/heart.png'),
        counter: localStorage.getItem('heart')
          ? Number(localStorage.getItem('heart'))
          : 0,
      },
      {
        id: 4,
        reaction: 'clap',
        icon: require('../assets/clapping.png'),
        counter: localStorage.getItem('clap')
          ? Number(localStorage.getItem('clap'))
          : 0,
      },
      {
        id: 5,
        reaction: 'smile',
        icon: require('../assets/happy.png'),
        counter: localStorage.getItem('smile')
          ? Number(localStorage.getItem('smile'))
          : 0,
      },

      {
        id: 6,
        reaction: 'grin',
        icon: require('../assets/excited.png'),
        counter: localStorage.getItem('grin')
          ? Number(localStorage.getItem('grin'))
          : 0,
      },
      {
        id: 7,
        reaction: 'sad',
        icon: require('../assets/sad.png'),
        counter: localStorage.getItem('sad')
          ? Number(localStorage.getItem('sad'))
          : 0,
      },
      {
        id: 8,
        reaction: 'rocket',
        icon: require('../assets/rocket.png'),
        counter: localStorage.getItem('rocket')
          ? Number(localStorage.getItem('rocket'))
          : 0,
      },
    ],
  },
  mutations: {
    // methods which change data in the state

    // passing id off a reaction as payload
    INCREMENT(state, payload) {
      const reaction = state.reactionList.find(
        (reaction) => reaction.id === payload
      )
      if (!reaction) {
        return state
      }
      const name = reaction.reaction
      reaction.counter++
      window.localStorage.setItem(name, JSON.stringify(reaction.counter))
    },

    // pass thought as a payload
    add_thoughts(state, thought: String) {
      state.thoughts = [...state.thoughts, thought]
    },
  },
})
