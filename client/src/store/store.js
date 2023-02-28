import { createStore } from "vuex";
import axios from "axios";
import router from "../router";

const store = createStore({
  state: {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    projects: [],
    projectWhereIamMember: [],
    currentUser: {
      id: null,
      email: null,
      password: null,
      firstName: null,
      lastName: null,
      createdAt: null,
      updatedAt: null,
    },
    profile: {
      findMyProfile: {
        adresse: null,
        poste: null,
        telephone: null,
        date_de_naissance: null,
        bisness_unit: null,
      },
      showDropdown: false,
      userRole: null,
    },
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
    setProjectWhereIamMember(state, projectWhereIamMember) {
      state.projectWhereIamMember = projectWhereIamMember;
    },
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },
    setProfile(state, profile) {
      state.profile = profile;
    },
    setUserRole(state, userRole) {
      state.userRole = userRole;
      localStorage.setItem("role", userRole);
    },
    setStatusTasks(state, statusTasks) {
      state.statusTasks = statusTasks;
    },
    setTeams(state, teams) {
      state.teams = teams;
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
          router.push("/dashAdmin/statistiques");
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
    async fetchAllTeams({ commit, state }) {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/teams/all",
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          }
        );
        const teams = response.data.findAllTeam;
        commit("setTeams", teams);
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
    async fetchProjectWhereIamMember({ commit, state }) {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/project/all/member",
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          }
        );
        const projectWhereIamMember = response.data;
        commit("setProjectWhereIamMember", projectWhereIamMember);
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
    async fetchProfile({ commit, state }) {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/profile/my",
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          }
        );
        const profile = response.data;
        commit("setProfile", profile);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async fetchStatusTasks({ commit, state }, projectId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/task/stat/${projectId}`,
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          }
        );
        const statusTasks = response.data;
        commit("setStatusTasks", statusTasks);
      } catch (error) {
        console.error(error);
        throw error;
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
