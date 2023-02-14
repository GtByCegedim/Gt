<template>
  <div>
    <h3 class="text-2xl font-bold text-left py-2">Kanban Board</h3>
  </div>
  
  <div class="flex flex-row space-x-4">
    <div class="w-1/3 bg-gray-100 p-4 rounded-lg">
      <h3
        class="text-2xl font-bold text-left py-2 mb-4 border-b-2 border-gray-300"
      >
        To Do
      </h3>
      <div class="space-y-2">
        <div
          v-for="task in toDo"
          :key="task.id"
          class="p-2 bg-white shadow-md rounded-lg cursor-move"
        >
          <h4 class="font-medium">{{ task.title }}</h4>
          <p class="text-gray-500 text-sm">{{ task.description }}</p>
        </div>
      </div>
    </div>
    <div class="w-1/3 bg-gray-100 p-4 rounded-lg">
      <h3
        class="text-2xl font-bold text-left py-2 mb-4 border-b-2 border-gray-300"
      >
        Doing
      </h3>
      <div class="space-y-2">
        <div
          v-for="task in doing"
          :key="task.id"
          class="p-2 bg-white shadow-md rounded-lg cursor-move"
        >
          <h4 class="font-medium">{{ task.title }}</h4>
          <p class="text-gray-500 text-sm">{{ task.description }}</p>
        </div>
      </div>
    </div>
    <div class="w-1/3 bg-gray-100 p-4 rounded-lg">
      <h3
        class="text-2xl font-bold text-left py-2 mb-4 border-b-2 border-gray-300"
      >
        Done
      </h3>
      <div class="space-y-2">
        <div
          v-for="task in done"
          :key="task.id"
          class="p-2 bg-white shadow-md rounded-lg cursor-move"
        >
          <h4 class="font-medium">{{ task.title }}</h4>
          <p class="text-gray-500 text-sm">{{ task.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Create wireframes",
          description: "Lorem ipsum dolor sit amet",
          status: "to-do",
        },
        {
          id: 2,
          title: "Design homepage",
          description: "Consectetur adipiscing elit",
          status: "to-do",
        },
        {
          id: 3,
          title: "Develop backend",
          description: "Sed do eiusmod tempor incididunt",
          status: "doing",
        },
        {
          id: 4,
          title: "Write documentation",
          description: "Ut enim ad minim veniam",
          status: "done",
        },
      ],
    };
  },
  computed: {
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
}

.dragging {
  opacity: 0.5;
}
</style>
