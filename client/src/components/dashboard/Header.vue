<template>
    <header class="flex justify-between items-center p-4 bg-gray-100 shadow-xl offset-x-2 offset-y-2">
      <div class="relative w-64">
        <input
          class="block w-full py-2 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="text"
          placeholder="Search"
        />
      </div>
      <div class="flex items-center space-x-4">
        <span class="text-gray-700 font-bold text-lg">Hello, {{ userName }}</span>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userName: "John Doe"
      };
    }
  };
  </script>
  