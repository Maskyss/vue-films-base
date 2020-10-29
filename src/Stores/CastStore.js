import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    cast: [],
  },
  mutations: {
    setCast(state, data) {
      state.cast = data;
    },
  },
  actions: {
    castSetter({ commit, state }, data) {
      commit("setCast", data);
    },
  },
});
