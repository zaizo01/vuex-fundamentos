import { createStore } from "vuex";
import getRandomInt from "../helpers/getRandomInt";

export default createStore({
  state: {
    count: 1,
    lastMutation: "None",
    isLoading: false,
    lastRandomInt: 0,
  },
  mutations: {
    increment(state) {
      state.count += 1;
      state.lastMutation = "increment";
    },
    incrementBy(state, val) {
      state.count += val;
      state.lastMutation = "incrementBy " + val;
      state.lastRandomInt = val;
    },
    setLoading(state, val) {
      state.isLoading = val;
      state.lastMutation = "setLoading " + val;
    },
  },
  actions: {
    async incrementRandomInt({ commit }) {
      commit("setLoading", true);
      const randomInt = await getRandomInt();
      commit("incrementBy", randomInt);
      commit("setLoading", false);
    },
  },
  getters: {
    squareCount(state) {
      return state.count * state.count;
    },
  },
});
