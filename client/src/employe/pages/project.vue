<template>
  <div class="flex-1">
    <h3 class="w py-2 text-gray-400  text-left text-2xl font-bold">
      Tous les projets pour lesquels je suis membre.
    </h3>
    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="w-full text-left text-sm text-gray-500 dark:text-gray-200">
        <thead
          class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-200"
        >
          <tr>
            <th scope="col" class="py-3 px-6">Project</th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                manager
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
                    ></path>
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                created at
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
                    ></path>
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                équipe
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
                    ></path>
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody v-for="project in projectWhereIamMember" :key="project.id">
          <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <th
            scope="row"
            class="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
            >
            <router-link 
            :to="{
            name:'infoProjet' ,
            params: { projectId: project.id },}"
            >
                {{ project.name }}
            </router-link>
              </th>
            <td class="py-4 px-6">
              {{ project.Manager.firstName }} {{ project.Manager.lastName }}
            </td>
            <td class="py-4 px-6">{{ project.createdAt }}</td>
            <td class="py-4 px-6">{{ project.team.name }}</td>
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
    <h3 class="w mt-10 py-2 text-gray-400 text-left text-2xl font-bold">
      Tous les projets pour lesquels je suis le manager.
    </h3>
    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="w-full text-left text-sm text-gray-500 dark:text-gray-200">
        <thead
          class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-200"
        >
          <tr>
            <th scope="col" class="py-3 px-6">Project</th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                created at
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
                    ></path>
                  </svg>
                </a>
              </div>
            </th>

            <td class="py-4 px-6">équipe</td>
            <td class="py-4 px-6 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >Edit</a
              >
            </td>
          </tr>
        </thead>
        <tbody v-for="myProject in myProjects" :key="myProject.id">
          <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <router-link 
            :to="{
            name:'infoProjet' ,
            params: { projectId: myProject.id },}"
            >
            <th
                scope="row"
                class="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
              >
                {{ myProject.name }}
              </th>
            </router-link>
            <td class="py-4 px-6">{{ myProject.createdAt }}</td>
            <td class="py-4 px-6" v-if="!myProject.team">Pas d'équipe encore</td>
            <td class="py-4 px-6" v-else>{{ myProject.team.name }}</td> 
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
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["myProjects"]),
    ...mapState(["projectWhereIamMember"]),
  },
  methods: {
    ...mapActions(["fetchMyProjects"]),
    ...mapActions(["fetchProjectWhereIamMember"]),
  },
  mounted() {
    this.fetchMyProjects();
    this.fetchProjectWhereIamMember();
  },
};
</script>
<style></style>
