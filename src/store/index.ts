import { createStore } from 'vuex'

export default createStore({
  state: {
    // store the data of our app
    counters: {
      likes: localStorage.getItem('likes')
        ? Number(localStorage.getItem('likes'))
        : 0,
      dislikes: localStorage.getItem('dislikes')
        ? Number(localStorage.getItem('dislikes'))
        : 0,
      hearts: localStorage.getItem('hearts')
        ? Number(localStorage.getItem('hearts'))
        : 0,
      claps: localStorage.getItem('claps')
        ? Number(localStorage.getItem('claps'))
        : 0,
      smiles: localStorage.getItem('smiles')
        ? Number(localStorage.getItem('smiles'))
        : 0,
      grins: localStorage.getItem('grins')
        ? Number(localStorage.getItem('grins'))
        : 0,
      rockets: localStorage.getItem('rockets')
        ? Number(localStorage.getItem('rockets'))
        : 0,
      saddies: localStorage.getItem('saddies')
        ? Number(localStorage.getItem('saddies'))
        : 0,
    },

    // TODO: find a way to get the icon data from store
    // reactionList: [
    //   {
    //     id: 1,
    //     reaction: 'thumbsUp',
    //     icon: require('../assets/like.png'),
    //   },
    //   {
    //     id: 2,
    //     reaction: 'thumbsDown',
    //     icon: require('../assets/dislike.png'),
    //   },
    //   {
    //     id: 3,
    //     reaction: 'heart',
    //     icon: require('../assets/heart.png'),
    //   },
    //   {
    //     id: 4,
    //     reaction: 'clap',
    //     icon: require('../assets/clapping.png'),
    //   },
    //   { id: 5, reaction: 'happy', icon: require('../assets/happy.png') },
    //   {
    //     id: 6,
    //     reaction: 'excited',
    //     icon: require('../assets/excited.png'),
    //   },
    //   {
    //     id: 7,
    //     reaction: 'awesome',
    //     icon: require('../assets/rocket.png'),
    //   },
    //   {
    //     id: 8,
    //     reaction: 'sad',
    //     icon: require('../assets/sad.png'),
    //   },
    // ],
  },
  mutations: {
    // TODO: Find away to make this and state above more dynamic
    // methods which change data in the state
    increaseLikes(state) {
      state.counters.likes++
      window.localStorage.setItem('likes', JSON.stringify(state.counters.likes))
    },
    increaseDislikes(state) {
      state.counters.dislikes++
      window.localStorage.setItem(
        'dislikes',
        JSON.stringify(state.counters.dislikes)
      )
    },
    increaseHearts(state) {
      state.counters.hearts++
      window.localStorage.setItem(
        'hearts',
        JSON.stringify(state.counters.hearts)
      )
    },
    increaseClaps(state) {
      state.counters.claps++
      window.localStorage.setItem('claps', JSON.stringify(state.counters.claps))
    },
    increaseSmiles(state) {
      state.counters.smiles++
      window.localStorage.setItem(
        'smiles',
        JSON.stringify(state.counters.smiles)
      )
    },
    increaseGrins(state) {
      state.counters.grins++
      window.localStorage.setItem('grins', JSON.stringify(state.counters.grins))
    },
    increaseRockets(state) {
      state.counters.rockets++
      window.localStorage.setItem(
        'rockets',
        JSON.stringify(state.counters.rockets)
      )
    },
    increaseSaddies(state) {
      state.counters.saddies++
      window.localStorage.setItem(
        'saddies',
        JSON.stringify(state.counters.saddies)
      )
    },
  },
})
