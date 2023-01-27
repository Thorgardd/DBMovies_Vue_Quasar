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
    getSearch(state) {
      return state.search
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
    setSearch(state, payload) {
      state.search = payload
    },
    setSearchResult(state, payload) {
      state.searchResult = payload
    }
  },
  actions: {},
})
