import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    actor: {},
  },
  mutations: {
    setActor(state, data) {
      state.actor = data;
    },
  },
  actions: {
    actorSetter({ commit, state }, data) {
      commit("setActor", data);
    },
  },
});
