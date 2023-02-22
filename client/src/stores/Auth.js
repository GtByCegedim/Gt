import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuthenticated: false,
    user: null,
    token: null,
  }),
  actions: {
    async login({ email, password }) {
      try {
        const response = await axios.post(
          "http://localhost:5050/api/auth/login",
          { email, password },
          { withCredentials: true }
        );

        this.isAuthenticated = true;
        this.user = response.data.user;
        this.token = response.data.token;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },

    async logout() {
      this.isAuthenticated = false;
      this.user = null;
      this.token = null;
    },
  },
});
