<script setup>
import Dashboard from './components/dashboard/Dashboard.vue';
import Projects from './components/dashboard/Projects.vue';
</script>

<template>
   <div class="flex">
    <div class="w-1/6  h-screen">
  <Dashboard/>
</div>
    <div class="w-5/6 pl-4">
  <Projects/>
</div>
  </div>
</template>
