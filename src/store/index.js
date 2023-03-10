import {createStore} from 'vuex'

export default createStore({
  state: {
    isAuth: false,
    movies: [],
    shows: [],
    search: "",
    searchResult: []
  },
  getters: {
    getIsAuth(state) {
      return state.isAuth;
    },
    getMovies(state) {
      return state.movies;
    },
    getShows(state) {
      return state.shows
    },
    getSearchResult(state) {
      return state.searchResult
    }
  },
  mutations: {
    setIsAuth(state, payload) {
      state.isAuth = payload;
    },
    setMovies(state, payload) {
      state.movies = payload
    },
    setShows(state, payload) {
      state.shows = payload
    },
    setSearchResult(state, payload) {
      state.searchResult = payload
    }
  },
  actions: {},
})
