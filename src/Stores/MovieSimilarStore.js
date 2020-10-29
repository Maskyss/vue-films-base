import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    movieSimilar: [],
  },
  mutations: {
    setMovieSimilar(state, data) {
      state.movieSimilar = data;
    },
  },
  actions: {
    movieSimilarSetter({ commit, state }, data) {
      commit("setMovieSimilar", data);
    },
  },
});
