<template>
  <div>
    <h3 class="text-2xl font-bold text-left py-2">Kanban Board</h3>

    <div class="flex flex-row space-x-4">
      <div class="w-1/3 bg-gray-100 p-4 rounded-lg">
        <h3 class="text-2xl font-bold text-left py-2 mb-4 border-b-2 border-gray-300">
          To Do
        </h3>
        <div class="space-y-2">
          <div
            v-for="task in toDo"
            :key="task.id"
            class="p-2 bg-white shadow-md rounded-lg cursor-move"
            draggable="true"
          >
            <h4 class="font-medium">{{ task.name }}</h4>
            <p class="text-gray-500 text-sm">{{ task.description }}</p>
            <div class="flex flex-row justify-between">
              <span class="text-gray-500 text-xs">{{ task.assignedTo }}</span>
              <span class="text-gray-500 text-xs">{{ task.timeEstimate }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3 bg-gray-100 p-4 rounded-lg">
        <h3 class="text-2xl font-bold text-left py-2 mb-4 border-b-2 border-gray-300">
          Doing
        </h3>
        <div class="space-y-2">
          <div
            v-for="task in doing"
            :key="task.id"
            class="p-2 bg-white shadow-md rounded-lg cursor-move"
            draggable="true"
          >
            <h4 class="font-medium">{{ task.name }}</h4>
            <p class="text-gray-500 text-sm">{{ task.description }}</p>
            <div class="flex flex-row justify-between">
              <span class="text-gray-500 text-xs">{{ task.assignedTo }}</span>
              <span class="text-gray-500 text-xs">{{ task.timeEstimate }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3 bg-gray-100 p-4 rounded-lg">
        <h3 class="text-2xl font-bold text-left py-2 mb-4 border-b-2 border-gray-300">
          Done
        </h3>
        <div class="space-y-2">
          <div
            v-for="task in done"
            :key="task.id"
            class="p-2 bg-white shadow-md rounded-lg cursor-move"
            draggable="true"
          >
            <h4 class="font-medium">{{ task.name }}</h4>
            <p class="text-gray-500 text-sm">{{ task.description }}</p>
            <div class="flex flex-row justify-between">
              <span class="text-gray-500 text-xs">{{ task.assignedTo }}</span>
              <span class="text-gray-500 text-xs">{{ task.timeEstimate }}</span>
            </div>
          </div>
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
          name: 'Task 1',
          description: 'This is task 1',
          priority: 'high',
          assignedTo: 'John Doe',
          timeEstimate: '2 hours',
          status: 'to-do',
        },
        {
          id: 2,
          name: 'Task 2',
          description: 'This is task 2',
          priority: 'medium',
          assignedTo: 'Jane Smith',
          timeEstimate: '1 hour',
          status: 'to-do',
        },
        {
          id: 3,
          name: 'Task 3',
          description: 'This is task 3',
          priority: 'low',
          assignedTo: 'Bob Johnson',
          timeEstimate: '30 minutes',
          status: 'doing',
        },
        {
          id: 4,
          name: 'Task 4',
          description: 'This is task 4',
          priority: 'high',
          assignedTo: 'Sara Lee',
          timeEstimate: '3 hours',
          status: 'doing',
        },
        {
          id: 5,
          name: 'Task 5',
          description: 'This is task 5',
          priority: 'medium',
          assignedTo: 'David Kim',
          timeEstimate: '2 hours',
          status: 'done',
        },
        {
          id: 6,
          name: 'Task 6',
          description: 'This is task 6',
          priority: 'low',
          assignedTo: 'Amy Chen',
          timeEstimate: '1 hour',
          status: 'done',
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
