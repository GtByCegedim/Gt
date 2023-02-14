<script setup>
import { defineProps } from 'vue';
import { Icon } from '@iconify/vue';
const { link, icon } = defineProps({
  link: String,
  icon: String
});
</script>

<template>
    <div class="bg-white p-6 rounded shadow-lg mb-4">
      <div class="inline-flex items-center">
        <Icon class="h-6 w-6 mr-2" :icon="icon" color="#89cff0" />
        <h3 class="text-lg font-medium">{{ link }}</h3>
      </div>
    </div>
  </template>
  
