import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    film: {},
  },
  mutations: {
    setFilm(state, data) {
      state.film = data;
    },
  },
  actions: {
    filmSetter({ commit, state }, data) {
      commit("setFilm", data);
    },
  },
});
