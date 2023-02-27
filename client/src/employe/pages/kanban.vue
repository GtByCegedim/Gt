<template>
  <div class="flex h-screen flex-col items-center justify-center">
    <h1 class="mb-4 text-2xl font-medium">{{ taskListTitle }}</h1>
    <div class="w-1/2">
      <div
        v-for="(tasks, status) in taskList"
        :key="status"
        class="mb-4 rounded-lg bg-gray-100 p-4 shadow-md"
      >
        <h3 class="text-md font-medium text-gray-900">{{ status }}</h3>
        <div v-if="tasks.length === 0" class="text-sm text-gray-500">
          No tasks found.
        </div>
        <div v-else>
          <div
            v-for="task in tasks"
            :key="task.id"
            class="mb-2 rounded-lg bg-white p-2 shadow-md"
          >
            <h4 class="text-md font-medium text-gray-900">{{ task.title }}</h4>
            <p class="text-sm leading-tight text-gray-500">
              {{ task.description }}
            </p>
            <div class="mt-2 flex flex-row items-center justify-between">
              <span class="text-xs text-gray-500"
                >{{ task.AssignationTo.firstName }}
                {{ task.AssignationTo.lastName }}</span
              >
              <span class="text-xs text-gray-500"
                >{{ task.timeEstimate }}h</span
              >
            </div>
          </div>
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
      taskListTitle: "My Task List",
      taskList: {},
    };
  },
  async created() {
    try {
      const projectId = this.$route.params.projectId;
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3000/api/task/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      this.taskList = response.data.tasks; // Changed to response.data.tasks
      this.taskListTitle = response.data.message; // Changed to response.data.message
      console.log(response.data); // Added ".data" to see the data object in console
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
