<template>
  <div class="py-8 flex-1">
    <h3 class="text-2xl text-gray-300 font-bold text-left mb-8">Kanban Board</h3>

    <div class="flex flex-row justify-center space-x-4">
      <div class="w-1/3 rounded-lg bg-gray-100 p-4">
        <h3
          class="mb-4 border-b-2 border-gray-300 text-center text-lg font-bold"
        >
          To Do 
        </h3>

        <div class="space-y-2">
          <div
            v-for="task in toDo"
            :key="task.id"
            class="transform cursor-move rounded-lg bg-white p-2 shadow-md transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg"
            draggable="true"
          >
            <h4 class="text-md font-medium text-gray-900">{{ task.name }}</h4>
            <p class="text-sm leading-tight text-gray-500">
              {{ task.description }}
            </p>
            <div class="mt-2 flex flex-row items-center justify-between">
              <span class="text-xs text-gray-500">{{ task.assignedTo }}</span>
              <span class="text-xs text-gray-500"
                >{{ task.timeEstimate }}h</span
              >
            </div>
          </div>
          <div class="p-4">
            <router-link
              :to="`/dashEmploye/addTask/`+  id "
              class="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-400"
            >
              Add Task 
            </router-link>
          </div>
          <div
            v-if="toDo.length === 0"
            class="rounded-lg bg-white p-2 text-center text-gray-500 shadow-md"
          >
            No tasks yet.
          </div>
        </div>
      </div>
      <div class="w-1/3 rounded-lg bg-gray-100 p-4">
        <h3
          class="mb-4 border-b-2 border-gray-300 text-center text-lg font-bold"
        >
          Doing
        </h3>
        <div class="space-y-2">
          <div
            v-for="task in doing"
            :key="task.id"
            class="transform cursor-move rounded-lg bg-white p-2 shadow-md transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg"
            draggable="true"
          >
            <h4 class="text-md font-medium text-gray-900">{{ task.name }}</h4>
            <p class="text-sm leading-tight text-gray-500">
              {{ task.description }}
            </p>
            <div class="mt-2 flex flex-row items-center justify-between">
              <span class="text-xs text-gray-500">{{ task.assignedTo }}</span>
              <span class="text-xs text-gray-500"
                >{{ task.timeEstimate }}h</span
              >
            </div>
          </div>
          <div
            v-if="doing.length === 0"
            class="rounded-lg bg-white p-2 text-center text-gray-500 shadow-md"
          >
            No tasks yet.
          </div>
        </div>
      </div>
      <div class="w-1/3 rounded-lg bg-gray-100 p-4">
        <h3
          class="mb-4 border-b-2 border-gray-300 text-center text-lg font-bold"
        >
          Doing
        </h3>
        <div class="space-y-2">
          <div
            v-for="task in done"
            :key="task.id"
            class="transform cursor-move rounded-lg bg-white p-2 shadow-md transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg"
            draggable="true"
          >
            <h4 class="text-md font-medium text-gray-900">{{ task.name }}</h4>
            <p class="text-sm leading-tight text-gray-500">
              {{ task.description }}
            </p>
            <div class="mt-2 flex flex-row items-center justify-between">
              <span class="text-xs text-gray-500">{{ task.assignedTo }}</span>
              <span class="text-xs text-gray-500"
                >{{ task.timeEstimate }}h</span
              >
            </div>
          </div>
          <div
            v-if="done.length === 0"
            class="rounded-lg bg-white p-2 text-center text-gray-500 shadow-md"
          >
            No tasks yet.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Create website wireframes",
          description: "Design wireframes for the new company website",
          priority: "high",
          assignedTo: "John Smisplit('/')[$route.path.split("/").length-1]th",
          timeEstimate: "10 hours",
          status: "to-do",
        },
        {
          id: 3,
          name: "Update customer database",
          description: "Add new customer data and update existing records",
          priority: "low",
          assignedTo: "Bob Johnson",
          timeEstimate: "2 hours",
          status: "doing",
        },
        {
          id: 4,
          name: "Write blog post",
          description: "Create a blog post about the company culture",
          priority: "high",
          assignedTo: "Alex Rodriguez",
          timeEstimate: "4 hours",
          status: "doing",
        },
      ],
    };
  },
  computed: {
      id() {
        const ProjetId =this.$route.path.split('/')
      return ProjetId[ProjetId.length-1] ;
    },
    toDo() {
      return this.tasks.filter((task) => task.status === "to-do");
    },
    doing() {
      return this.tasks.filter((task) => task.status === "doing");
    },
    done() {
      return this.tasks.filter((task) => task.status === "done");
    },
  },
  mounted() {
    const draggables = document.querySelectorAll(".cursor-move");
    const containers = document.querySelectorAll(".bg-gray-100");

    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });
      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
      draggable.addEventListener("dblclick", () => {
        draggable.setAttribute("draggable", "true");
      });
    });

    containers.forEach((container) => {
      container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".dragging");
        if (afterElement == null) {
          container.appendChild(draggable);
        } else {
          container.insertBefore(draggable, afterElement);
        }
        updateTaskStatus();
      });
    });

    const getDragAfterElement = (container, y) => {
      const draggableElements = [
        ...container.querySelectorAll(".cursor-move:not(.dragging)"),
      ];

      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    };

    const updateTaskStatus = () => {
      this.tasks.forEach((task) => {
        const draggable = document.querySelector(`[key="${task.id}"]`);
        if (draggable.parentElement.classList.contains("w-1/3")) {
          task.status = "to-do";
        } else if (draggable.parentElement.classList.contains("w-2/3")) {
          task.status = "doing";
        } else {
          task.status = "done";
        }
      });
    };
  },
};
</script>

<style>
.space-y-2 > div {
  margin-bottom: 8px;
}
.cursor-move {
  cursor: move;
  margin-bottom: 8px;
}

.dragging {
  opacity: 0.5;
}
</style>
