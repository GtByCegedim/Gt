<template>
  <div class="relative flex-1 py-8">
    <div class="mb-8 flex items-center justify-between">
      <h3 class="text-left text-2xl font-bold text-gray-300">Kanban Board</h3>
      <h3 class="text-left text-2xl font-bold text-gray-300">
        {{ taskListTitle }}
      </h3>
      <div class="flex space-x-4">
        <router-link
          :to="`/dashEmploye/addTask/` + id"
          class="rounded bg-green-400 px-4 py-2 text-white hover:bg-gray-600"
        >
          Add Task
        </router-link>
        <router-link
          :to="`/dashEmploye/addTask/` + id"
          class="rounded bg-indigo-400 px-4 py-2 text-white hover:bg-indigo-600"
        >
          Add status
        </router-link>
      </div>
    </div>
    <div class="flex flex-row">
      <div
        v-for="(tasks, status) in taskList.tasksByStatus"
        :key="status"
        class="mx-2 w-1/4"
      >
        <div class="mb-4 rounded-lg bg-gray-50 p-4 shadow-md">
          <h3 class="text-md font-medium text-gray-800">{{ status }}</h3>
          <div v-if="tasks.length === 0" class="text-sm text-gray-500">
            No tasks found.
          </div>
          <div v-else>
            <div
              v-for="task in tasks"
              :key="task.id"
              class="mb-2 rounded-lg bg-gray-200 p-2 shadow-md"
            >
              <div @click="goToTaskInfo(task.id)">
                <h4 class="text-md font-medium text-gray-800">
                  {{ task.title }}
                </h4>
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
              <button
                @click.stop="openModal(task.id)"
                class="text-xs text-blue-500"
              >
                Change Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showModal" class="fixed inset-0 z-0 overflow-y-auto">
    <div class="flex min-h-screen items-center justify-center">
      <div
        class="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity"
        @click="closeModal"
      ></div>
      <div class="z-[100] m-4 w-full max-w-lg rounded-lg bg-white p-4">
        <h2 class="mb-4 text-xl font-bold">Select a new status</h2>
        <ul>
          <li
            v-for="status in statuses"
            :key="status.id"
            class="mb-2 cursor-pointer rounded p-2 text-gray-900 hover:bg-gray-200"
            @click.stop="changeStatus(selectedTaskId, status)"
          >
            {{ status.status }}
          </li>
        </ul>
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
      statuses: [],
      showModal: false,
      selectedTaskId: null,
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

      this.taskList = response.data;
      this.taskListTitle = response.data.message;
      await this.fetchStatuses(projectId, token);
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    id() {
      const ProjetId = this.$route.path.split("/");
      return ProjetId[ProjetId.length - 1];
    },
  },
  methods: {
    goToTaskInfo(taskId) {
      this.$router.push(`/dashEmploye/infoTask/${taskId}`);
    },
    openModal(taskId) {
      this.selectedTaskId = taskId;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },

    async fetchStatuses(projectId, token) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/status/allOfprojet/${projectId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.statuses = response.data.findStatutOfProject;
      } catch (error) {
        console.error(error);
      }
    },
    async changeStatus(taskId, status) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.put(
          `http://localhost:3000/api/status/update/${taskId}`,
          { statut: status.status },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.message);
        this.showModal = false;
        this.$router.go()
        // You can also update the taskList in the component to reflect the new status
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
