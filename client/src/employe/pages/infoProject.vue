<template>
  <div class="flex-1">
    <section>
      <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div
          class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
        >
          <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 class="text-3xl font-bold sm:text-4xl">{{ project.getMyProject.name }}</h2>

            <p class="mt-4 text-gray-600">{{ project.getMyProject.description }}</p>

            <a
              href="#"
              class="mt-8 inline-block rounded bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Voir Kanban Board
            </a>
          </div>

          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
              class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <span class="text-sm font-bold text-gray-600">25</span>
              </span>

              <h2 class="mt-2 font-bold">A FAIRE</h2>
            </a>

            <a
              class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <span class="text-sm font-bold text-gray-600">25</span>
              </span>

              <h2 class="mt-2 font-bold">BLOQUED</h2>
            </a>

            <a
              class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <span class="text-sm font-bold text-gray-600">17</span>
              </span>

              <h2 class="mt-2 font-bold">REVIEW</h2>
            </a>

            <a
              class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <span class="text-sm font-bold text-gray-600">17</span>
              </span>

              <h2 class="mt-2 font-bold">FINIT</h2>
            </a>

            <a
              class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <span class="text-sm font-bold text-gray-600">17</span>
              </span>

              <h2 class="mt-2 font-bold">TEST</h2>
            </a>

            <a
              class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/accountant"
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <span class="text-sm font-bold text-gray-600">17</span>
              </span>

              <h2 class="mt-2 font-bold">AMELIORER</h2>
            </a>
          </div>
        </div>
      </div>
      <div class="relative overflow-x-auto sm:rounded-lg">
        <h2 class="text-start text-3xl font-bold sm:text-3xl">Membres</h2>
        <table
          class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
        >
          <thead
            class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
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
                      ></path></svg>
                  </a>
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
                      ></path></svg>
                  </a>
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
                      ></path></svg>
                  </a>
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody v-for="user in project.users" :key="user.id">
            <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                class="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
              >
              {{ user.lastName }}
              </th>
              <td class="py-4 px-6">{{ user.firstName }}</td>
              <td class="py-4 px-6">{{ user.email }}</td>
              <td class="py-4 px-6">Développeur</td>
              <td class="py-4 px-6 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >Edit</a>
                
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

export default {
  data() {
    return {
      project: {},
    };
  },
  async created() {
    try {
      const projectId = this.$route.params.projectId;
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3000/api/project/getProject/${projectId} `,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.project = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
