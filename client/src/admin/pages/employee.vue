<template>
  <div class="flex-1 flex-col">
    <h3 class="py-2 text-left text-2xl font-bold">All Users</h3>

    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="w-full text-left text-sm text-gray-500 dark:text-gray-200">
        <thead
          class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-200"
        >
          <tr>
            <th scope="col" class="py-3 px-6">LastName</th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                FirstName
                <a href="#"></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Email
                <a href="#"></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Post
                <a href="#"></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
            class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <router-link
              :to="{ name: 'infosEmploye', params: { id: user.id } }"
             
            >
              <td
                scope="row"
                class="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white cursor-pointer"
              >
                {{ user.lastName }}
              </td>
            </router-link>
              <td
                class="py-4 px-6 cursor-pointer"
              >
                {{ user.firstName }}
              </td>
              <td
                class="py-4 px-6 cursor-pointer"
              >
                {{ user.email }}
              </td>
              <td
                class="py-4 px-6 cursor-pointer"
              >
                Software Engineer
              </td>
              <td class="py-4 px-6 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >Edit</a
                >
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:3000/api/employe/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
