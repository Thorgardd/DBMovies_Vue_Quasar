import {createStore} from 'vuex'

export default createStore({
  state: {
    isAuth: false,
    user: {
      username: "",
      password: "",
    }
  },
  getters: {
    getIsAuth(state){
      return state.isAuth
    },
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    setIsAuth(state, value) {
      state.isAuth = value;
    },
    setUserName(state, value) {
      state.user.username = value;
    },
    setUserPwd(state, value) {
      state.user.password = value;
    }
  },
  actions: {},
})
