import { createStore } from "vuex";
import axios from "axios";
import router from "../router";

const store = createStore({
  state: {
    token: localStorage.getItem('token'),
    isAuthenticated: false, 
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    clearToken(state) {
      state.token = null;
      localStorage.removeItem('token');
    },
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const response = await axios.post(
          "http://localhost:5050/api/auth/login",
          {
            email,
            password,
          }
        );
        const token = response.data.token;
        commit("setToken", token);
        commit("setIsAuthenticated", true);
        router.push("/dashAdmin/statAdmin");
        return token;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    logout({ commit }) {
      commit("setIsAuthenticated", false);
      commit("clearToken");
    },
  },
});

export default store;
