<template>
    <div class="chart-container">
      <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
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
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
  
  export default {
    name: "BarChart",
    components: { Bar },
    props: {
      projects: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        chartData: {
          labels: this.projects.map((project) => project.title),
          datasets: [
            {
              label: "Completed Tasks",
              backgroundColor: "#C6F6D5",
              borderColor: "#4CAF50",
              data: this.projects.map((project) => project.completedTasks),
            },
            {
              label: "Overdue Tasks",
              backgroundColor: "#FECDD3",
              borderColor: "#F44336",
              data: this.projects.map((project) => project.overdueTasks),
            },
            {
              label: "In Progress Tasks",
              backgroundColor: "#90cdf4",
              borderColor: "#2196F3",
              data: this.projects.map((project) => project.inProgressTasks),
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false, // To not take up the whole page
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true, // To start at 0
                  fontColor: "white", // To change the font color
                },
                gridLines: {
                  display: true,
                  color: "rgba(255, 255, 255, 0.1)", // To change the color of the gridlines
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "white", // To change the font color
                },
                gridLines: {
                  display: false, // To hide the gridlines
                },
              },
            ],
          },
          legend: {
            labels: {
              fontColor: "white", // To change the font color of the legend labels
            },
          },
        },
      };
    },
  };
  </script>
  
  <style>
  .chart-container {
    height: 300px;
    width: 400px;
    margin: 0 auto;
  }
  </style>
  