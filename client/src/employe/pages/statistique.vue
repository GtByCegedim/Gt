<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4"
  >
    <CardsStatistique
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
    />
  </div>
  <div class="w-1/2 border p-4">
    <LineChart :projects="projects" />
   
  </div>

  <chartExemple />
</template>

<script>
import { defineAsyncComponent } from "vue";
import CardsStatistique from "@/employe/components/CardsStatistique.vue";
import LineChart from "@/employe/components/LineChart.vue";


const chartExemple = defineAsyncComponent(() => import("@/employe/components/RadarChart.vue"));


export default {
  components: {
    CardsStatistique,
    LineChart,
    chartExemple
    
  },
  data() {
    return {
      projects: [
        {
          title: "Project A",
          completedTasks: 10,
          overdueTasks: 2,
          inProgressTasks: 5,
          manager: "John Doe",
        },
        {
          title: "Project B",
          completedTasks: 5,
          overdueTasks: 1,
          inProgressTasks: 8,
          manager: "Jane Smith",
        },
        {
          title: "Project C",
          completedTasks: 8,
          overdueTasks: 3,
          inProgressTasks: 4,
          manager: "Bob Johnson",
        },
        {
          title: "Project D",
          completedTasks: 12,
          overdueTasks: 0,
          inProgressTasks: 3,
          manager: "Samantha Lee",
        },
      ],
    };
  },
};
</script>
