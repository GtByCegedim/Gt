<!-- StatisticChart.vue -->
<template>
    <div>
      <Bar
        v-if="statusTasks"
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
    </div>
  </template>
  
  <script>
  import { Bar } from "vue-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";
  import store from "../store/store";
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
  
  export default {
    name: "StatisticChart",
    components: { Bar },
    props: {
      projectId: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        statusTasks: null,
        chartData: {
          labels: [],
          datasets: [
            {
              label: "Tasks",
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
              data: [],
            },
          ],
        },
        chartOptions: {
          responsive: true,
        },
      };
    },
    watch: {
      projectId: {
        handler: function (newProjectId, oldProjectId) {
          if (newProjectId !== oldProjectId) {
            this.fetchStatusTasksData(newProjectId);
          }
        },
        immediate: true,
      },
    },
    methods: {
      async fetchStatusTasksData(projectId) {
        if (!projectId) return;
        await store.dispatch("fetchStatusTasks", projectId); // Call fetchStatusTasks action
        this.statusTasks = store.state.statusTasks;
  
        // Update chartData with statusTasks
        this.chartData = {
          labels: this.statusTasks.map((task) => task.status),
          datasets: [
            {
              ...this.chartData.datasets[0],
              data: this.statusTasks.map((task) => task.count),
            },
          ],
        };
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles for the StatisticChart component here */
  </style>
  