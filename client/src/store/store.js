import { createStore } from "vuex";
import axios from "axios";
import router from "../router";

const store = createStore({
  state: {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    projects: [],
    currentUser: {
      id: null,
      email: null,
      password: null,
      firstName: null,
      lastName: null,
      createdAt: null,
      updatedAt: null
    },
    showDropdown: false,
    userRole: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    clearToken(state) {
      state.token = null;
      localStorage.removeItem("token");
    },
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setMyProjects(state, myProjects) {
      state.myProjects = myProjects;
    },
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },
    setUserRole(state, userRole) {
      state.userRole = userRole;
      localStorage.setItem("role", userRole)
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/login",
          {
            email,
            password,
          }
        );
        const token = response.data.token;
        const userRole = response.data.role;
        commit("setToken", token);
        commit("setUserRole", userRole);
        commit("setIsAuthenticated", true);
        if (userRole === "admin") {
          router.push("/dashAdmin/statAdmin");
        } else if (userRole === "employe") {
          router.push("/dashEmploye/statistique");
        }
        return token;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async fetchProjects({ commit, state }) {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/project/all",
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          }
        );
        const projects = response.data;
        commit("setProjects", projects);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async fetchMyProjects({ commit, state }) {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/project/all/my",
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          }
        );
        const myProjects = response.data;
        commit("setMyProjects", myProjects);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async fetchCurrentUser({ commit, state }) {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/employe/me",
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          }
        );
        const currentUser = response.data;
        commit("setCurrentUser", currentUser);
      } catch (error) {
        console.error(error.response.data.message);
      }
    },
    logout({ commit }) {
      commit("setIsAuthenticated", false);
      commit("setUserRole", null);
      commit("clearToken");
      commit("setCurrentUser", null);
      location.reload();
    },
  },
});

export default store;