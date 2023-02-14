<script setup>
import Dashboard from './components/dashboard/Dashboard.vue';
import Projects from './components/dashboard/Projects.vue';
import AddProject from './components/dashboard/AddProject.vue';
import Header from './components/dashboard/Header.vue';
</script>

<template>
   <div class="flex w-screen">
    <div class="w-1/6  h-screen">
  <Dashboard/>
</div>
    <div class="w-5/6 h-screen flex flex-col space-y-10 ">
      <div class="">
        <Header/>
      </div>
      <div class="mx-10">
        <Projects/>
      </div>
 
</div>
  </div>
</template>
