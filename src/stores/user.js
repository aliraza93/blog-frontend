import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import router from '@/router';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),

  getters: {
    getUser: (state) => state.user
  },

  actions: {
    async login (data) {
        await axios
            .get("/sanctum/csrf-cookie")
            .then((response) => {
            // Login... 
        });

        // brennan55@example.net
        await axios
            .post("/login", data)
            .then((response) => {
            // Login...
        });

        await axios.get("/api/user").then((res) => {
            if (res.status === 200) {
                this.user = res.data
                router.push({
                    name: 'dashboard'
                })
            }
        });
    }
  }
})
