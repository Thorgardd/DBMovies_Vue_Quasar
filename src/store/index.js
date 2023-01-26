import {createStore} from 'vuex'

export default createStore({
  state: {
    movies: []
  },
  getters: {
    getMovies: (state) => {
      return state.movies;
    }
  },
  mutations: {
    setMovies: (state, movies) => {
      state.movies = movies;
    }
  },
  actions: {},
})
