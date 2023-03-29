<template>
  <div class="flex-1 dark:bg-gray-800 dark:text-gray-100">
    <div
      class="container mx-auto max-w-4xl rounded-lg px-10 py-6 shadow-sm dark:bg-gray-900"
    >
      <div class="flex items-center justify-between">
        <span class="text-sm dark:text-gray-400">{{ task.createdAt }}</span>
        <span
          class="rounded px-2 py-1 font-bold dark:bg-violet-400 dark:text-gray-900"
          >{{ task.projectId }}</span
        >
      </div>
      <div class="mt-3">
        <h2 class="text-2xl font-bold">{{ task.title }}</h2>
        <p class="mt-2">{{ task.description }}</p>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <a
          rel="noopener noreferrer"
          href="#"
          class="hover:underline dark:text-violet-400"
          >Assigner à un autre employe</a
        >
        <div>
          <a rel="noopener noreferrer" href="#" class="flex items-center">
            <!-- Replace the src attribute with the appropriate API endpoint to fetch the assignee's avatar -->
            <img
              src="../../assets/gtlogo-removebg-preview.png"
              alt="avatar"
              class="mx-4 h-10 w-10 rounded-full object-cover dark:bg-gray-500"
            />
            <span class="hover:underline dark:text-gray-400">{{
              task.assignedTo
            }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      task: {},
    };
  },
  async created() {
    try {
      const taskId = this.$route.params.taskId;
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3000/api/task/infoTask/${taskId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      this.task = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
