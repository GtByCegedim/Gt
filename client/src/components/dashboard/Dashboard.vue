<script setup>
import Route from './Route.vue';

</script>

<template>
  <div class="w-64 bg-blue-500 h-full left-0 top-0 fixed">
    <h2 class="text-white text-xl font-bold p-6">GT by cegedim-srh</h2>
    <div class="flex flex-col mb-4 p-6">
      <Route link="Canban Board" icon="iconoir:kanban-board" />
      <Route link="Project managers" icon="carbon:ibm-cloud-secrets-manager"/>
      <Route link="Create Project" icon="material-symbols:add-circle-outline"/>
    </div>
  </div>
</template>


