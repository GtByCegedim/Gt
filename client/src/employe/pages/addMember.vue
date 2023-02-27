<template>
  <div class="flex-1">
    <h3 class="mb-2 text-left text-2xl font-bold">
      Ajouter des Employés à votre équipe
    </h3>
    <section>
      <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div
          class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
        >
          <div class="group space-y-2">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="art cover"
              loading="lazy"
              width="1000"
              height="667"
              class="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
            />
          </div>

          <div class="p-8 py-12 sm:p-16">
            <form @submit.prevent="addUserToTeam">
              <div class="space-y-2">
                <label for="email" class="text-gray-200 dark:text-gray-300"
                  >Entrer l'email de l'employé que vous souhaitez ajouter à
                  cette équipe</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-100 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                  v-model="email"
                />
              </div>

              <button type="submit" class="...">
                <span
                  class="dark:text-dark relative text-base font-semibold text-white"
                  >Créer</span
                >
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="relative overflow-x-auto sm:rounded-lg">
        <h2 class="text-start text-3xl font-bold sm:text-3xl">Membres</h2>
        <table
          class="w-full text-left text-sm text-gray-500 dark:text-gray-200"
        >
          <thead
            class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-200"
          >
            <tr>
              <th scope="col" class="py-3 px-6">lasName</th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  FirstName
                  <a href="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-1 h-3 w-3"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                      ></path></svg
                  ></a>
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  email
                  <a href="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-1 h-3 w-3"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                      ></path></svg
                  ></a>
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  post
                  <a href="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-1 h-3 w-3"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"
                      ></path></svg
                  ></a>
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                class="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
              >
                Lahlali
              </th>
              <td class="py-4 px-6">Wassim</td>
              <td class="py-4 px-6">wlahlali343@gmail.com</td>
              <td class="py-4 px-6">developpeur</td>
              <td class="py-4 px-6 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >Edit</a
                >
              </td>
            </tr>
            <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                class="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
              >
                Safia
              </th>
              <td class="py-4 px-6">ElMaani</td>
              <td class="py-4 px-6">safia@gmail.com</td>
              <td class="py-4 px-6">developpeur</td>
              <td class="py-4 px-6 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >Edit</a
                >
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
              >
                Bader
              </th>
              <td class="py-4 px-6">Abouriel</td>
              <td class="py-4 px-6">Accessories</td>
              <td class="py-4 px-6">bAbouriel@gmail.com</td>
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
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  data() {
    return {
      email: "",
      teamId: this.$route.params.id,
    };
  },
  methods: {
    async addUserToTeam() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `http://localhost:3000/api/teams/addUser/${this.teamId}`,
          {
            email: this.email,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
