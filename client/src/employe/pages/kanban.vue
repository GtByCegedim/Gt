<template>
  <div class="flex-1 py-8">
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
            <vue-draggable-next
              class="dragArea list-group w-full"
              :list="tasks"
              @change="log"
              @drag-end="onDragEnd"
            >
              <div
                class="list-group-item mb-2 rounded-md bg-gray-200 p-2 shadow-md"
                v-for="task in tasks"
                :key="task.id"
                :id="task.id"
                @click="$router.push('/dashemploye/infoTask')"
              >
                <h4 class="text-md font-medium text-gray-800">
                  {{ task.title }}
                </h4>
                <p class="text-sm leading-tight text-gray-500">
                  {{ task.description }}
                </p>
                <div class="mt-2 flex flex-row items-center justify-between">
                  <span class="text-xs text-gray-500">
                    {{ task.AssignationTo.firstName }}
                    {{ task.AssignationTo.lastName }}
                  </span>
                  <span class="text-xs text-gray-500">
                    {{ task.timeEstimate }}h
                  </span>
                </div>
              </div>
            </vue-draggable-next>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { VueDraggableNext } from "vue-draggable-next";

export default {
  components: {
    VueDraggableNext,
  },
  data() {
    return {
      taskListTitle: "My Task List",
      taskList: {},
    };
  },
  async created() {
    await this.fetchTaskList();
  },

  computed: {
    id() {
      const ProjetId = this.$route.path.split("/");
      return ProjetId[ProjetId.length - 1];
    },
  },
  methods: {
    async fetchTaskList() {
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
      } catch (error) {
        console.error(error);
      }
    },

    async onDragEnd(event) {
      console.log("Drag end:", event);
      const taskId = event.item.id;
      const newStatus =
        event.to.parentElement.parentElement.firstElementChild.textContent.trim();
      try {
        await this.updateTaskStatus(taskId, newStatus);
      } catch (error) {
        console.error(error);
      }
    },
    async updateTaskStatus(taskId, newStatus) {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.patch(
          `http://localhost:3000/api/status/update/${taskId}`,
          { statut: newStatus },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        await this.fetchTaskList();
      } catch (error) {
        console.error(error);
      }
    },

    log(event) {
      console.log(event);
    },
    // ...
  },
};
</script>
