import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    moviesList: {},
  },
  mutations: {
    setMoviesList(state, data) {
      state.moviesList = data;
    },
  },
  actions: {
    moviesListSetter({ commit, state }, data) {
      commit("setMoviesList", data);
    },
  },
});
