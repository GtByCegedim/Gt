<template>
  <div class="flex flex-1 flex-col gap-x-6 py-8">
    <h3 class="py-2 text-left text-2xl font-bold">All Projects</h3>
    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead
          class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
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
                    ></path></svg
                ></a>
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
                    ></path></svg
                ></a>
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
                    ></path></svg
                ></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody v-for="project in projects" :key="project.id">
          <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td
              scope="row"
              class="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
            >
              <router-link
                :to="{
                  name: 'projetDetails',
                  params: { projectId: project.id },
                }"
                >{{ project.name }}</router-link
              >
            </td>
            <td class="py-4 px-6">
              {{ project.description }}
            </td>
            <td class="py-4 px-6">
              {{ project.createdAt }}
            </td>
            <td class="py-4 px-6">équipe</td>
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
    ...mapState(["projects"]),
  },
  methods: {
    ...mapActions(["fetchProjects"]),
  },
  mounted() {
    this.fetchProjects();
  },
};
</script>

<style></style>
