<template>
    <div class="flex flex-col items-center bg-white rounded-lg shadow-md p-8">
      <div class="text-gray-600 font-medium text-lg mb-4">{{ project.title }}</div>
      <div class="flex items-center">
        <div class="bg-green-200 rounded-full h-6 w-6 mr-2"></div>
        <div class="text-gray-500 text-sm">{{ project.completedTasks }} Tasks Completed</div>
      </div>
      <div class="flex items-center mt-2">
        <div class="bg-red-200 rounded-full h-6 w-6 mr-2"></div>
        <div class="text-gray-500 text-sm">{{ project.overdueTasks }} Tasks Overdue</div>
      </div>
      <div class="flex items-center mt-2">
        <div class="bg-blue-200 rounded-full h-6 w-6 mr-2"></div>
        <div class="text-gray-500 text-sm">{{ project.inProgressTasks }} Tasks In Progress</div>
      </div>
      <div class="text-gray-500 text-sm mt-4">Managed by: {{ project.manager }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardsStatistique",
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  