import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    showtvList: {},
  },
  mutations: {
    setshowtvList(state, data) {
      state.showtvList = data;
    },
  },
  actions: {
    showtvListSetter({ commit, state }, data) {
      commit("setshowtvList", data);
    },
  },
});
