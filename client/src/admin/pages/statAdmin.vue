<script>
import { mapState, mapActions } from "vuex";
import StatisticChart from "../../charts/StatisticChart.vue";

export default {
  components: {
    StatisticChart,
  },
  data() {
    return {
      invoices: [
        {
          no: "groupe 1",
          date: "wassim lahali",
          amount: "ws,sm,ba",
          status: "active",
        },
        {
          no: "groupe 2",
          date: "wassim lahalali",
          amount: "sc,fsf",
          status: "Pending",
        },
      ],
      selectedProject: "",
      currentDate: "",
      currentTime: "",
    };
  },
  computed: {
    ...mapState(["currentUser"]),
    ...mapState(["profile"]),
    ...mapState(["projects"]),
    ...mapState(["projectStatistics"]),
  },
  methods: {
    ...mapActions(["fetchCurrentUser"]),
    ...mapActions(["fetchProfile"]),
    ...mapActions(["fetchProjects"]),
    ...mapActions(["fetchProjectStatistics"]),
    onProjectChange() {
    if (this.selectedProject) {
      this.fetchProjectStatistics(this.selectedProject);
    }
  },

    updateTime() {
      this.currentDate = new Date().toLocaleDateString();
      this.currentTime = new Date().toLocaleTimeString();
    },
  },
  watch: {
    selectedProject: {
      handler(projectId) {
        if (projectId) {
          this.fetchProjectStatistics(projectId);
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.fetchCurrentUser();
    this.fetchProfile();
    this.fetchProjects();
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
};
</script>

<template>
  <div class="flex w-3/5 flex-col gap-y-8">
    <div
      class="flex items-center justify-between rounded-10 bg-gray-900 bg-[url('/img/line-pattern.svg')] p-7"
    >
      <div class="flex items-center gap-x-4">
        <div class="rounded-full bg-gray-700 p-3">
          
        </div>
        <div>
          <div class="text-sm text-gray-200">NOM COMPLET</div>
          <div class="pt-1 text-white">
            {{ currentUser.firstName }} {{ currentUser.lastName }}
          </div>
        </div>
      </div>
      <div class="h-full w-px bg-gray-700" />
      <div>
        <div class="text-sm text-gray-200">DATE</div>
        <div class="pt-1 text-white">{{ currentDate }}</div>
      </div>
      <div class="h-full w-px bg-gray-700" />
      <div>
        <div class="text-sm text-gray-200">HEURE</div>
        <div class="pt-1 text-white">{{ currentTime }}</div>
      </div>
      <div class="h-full w-px bg-gray-700" />
      <div>
        <div class="text-sm text-gray-200">POSTE</div>
        <div class="pt-1 text-white">{{ profile.findMyProfile.poste }}</div>
      </div>
    </div>
    <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
      <div class="flex items-center justify-between">
        <h2 class="text-[20px] font-medium text-white">
          Statistiques des projets
        </h2>
        <select
          class="inline-flex items-center gap-x-1 rounded-10 bg-gray-700 py-2 px-4 text-sm text-gray-200 hover:text-white"
          v-model="selectedProject"
          @change="onProjectChange"
        >
          <option value="" disabled>Select a project</option>
          <option
            v-for="project in projects"
            :key="project.id"
            :value="project.id"
          >
            {{ project.name }}
          </option>
        </select>
      </div>
      <div class="flex gap-x-8 pt-8">
        <StatisticChart class="w-full" :projectId="selectedProject" />


        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-x-3 rounded-10 bg-indigo-400 p-4">
            <div class="rounded-full bg-gray-900 p-2 text-indigo-700">
              
            </div>
            <div>
              <div class="text-sm text-indigo-700">En cours</div>
              <div class="font-normal">10</div>
            </div>
          </div>
          <div class="flex items-center gap-x-3 rounded-10 bg-green-400 p-4">
            <div class="rounded-full bg-gray-900 p-2 text-green-700">
              
            </div>
            <div>
              <div class="text-sm text-green-700">Finis</div>
              <div class="font-normal">14</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
      <div class="flex items-center justify-between">
        <h2 class="text-[20px] font-medium text-white">Groupes</h2>
        <button
          class="inline-flex items-center gap-x-1 rounded-10 bg-gray-700 py-2 px-4 text-sm text-gray-200 hover:text-white"
        >
          
          <span>Voir tout</span>
        </button>
      </div>
      <table class="mt-4">
        <thead>
          <tr>
            <td class="py-1 text-sm text-gray-200">label</td>
            <td class="py-1 text-sm text-gray-200">manager</td>
            <td class="py-1 text-sm text-gray-200">membres</td>
            <td class="py-1 text-sm text-gray-200">statut</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="invoice in invoices"
            class="border-b border-gray-700 last:border-none"
            v-bind:key="invoice.no"
          >
            <td class="py-4">
              <span class="text-sm font-medium text-white">
                {{ invoice.no }}
              </span>
            </td>
            <td class="py-4">
              <span class="text-sm text-gray-200">
                {{ invoice.date }}
              </span>
            </td>

            <td class="py-4">
              <span class="text-sm text-white">
                {{ invoice.amount }}
              </span>
            </td>
            <td class="py-4">
              <div
                class="flex items-center justify-center gap-x-2 rounded-10 border py-2 px-1"
                :class="
                  invoice.status === 'active'
                    ? 'border-green-400/10 bg-green-700/20 text-green-400'
                    : 'border-indigo-400/10 bg-indigo-700/20 text-indigo-400'
                "
              >
                <span
                  class="h-2 w-2 rounded-full"
                  :class="
                    invoice.status === 'active'
                      ? 'bg-green-400'
                      : 'bg-indigo-400'
                  "
                />
                <span class="text-xs">
                  {{ invoice.status }}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="flex w-2/5 flex-col gap-y-8">
    <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
      <div class="flex items-center justify-between">
        <h2 class="text-[20px] font-medium text-white">Projets</h2>
      </div>
      <div class="grid grid-cols-3 gap-x-4 pt-4">
        <div
          v-for="(project, index) in projects.slice(0, 3)"
          :key="index"
          class="rounded-10 bg-gray-700 p-3"
        >
          <div class="pt-3 text-sm text-white">{{ project.name }}</div>
        </div>
      </div>

      <router-link to="/dashAdmin/project">
        <button
          class="mt-4 w-full rounded-10 bg-gray-700 py-3 text-gray-200 hover:text-white"
        >
          voir tous les projets
        </button>
      </router-link>
    </div>
    <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
      <div class="flex items-center justify-between">
        <h2 class="text-[20px] font-medium text-white">taches</h2>
        <select
          class="inline-flex items-center gap-x-1 rounded-10 bg-gray-700 py-2 px-4 text-sm text-gray-200 hover:text-white"
          v-model="selectedProject"
          @change="onProjectChange"
        >
          <option value="" disabled>Select a project</option>
          <option
            v-for="project in projects"
            :key="project.id"
            :value="project.id"
          >
            {{ project.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col gap-y-4 pt-4">
        <div class="flex w-full items-start gap-x-4 rounded-10 bg-gray-700 p-4">
          <div
            class="flex items-center justify-center rounded-full bg-indigo-800 p-2"
          >
           
          </div>
          <div class="flex-1">
            <div class="flex items-center justify-between leading-none">
              <span class="text-white">A faire</span>
            </div>
            <span class="text-sm leading-3 text-gray-200">
              2 months income 80%
            </span>
            <div class="mt-3 h-2 w-full rounded-full bg-gray-900">
              <div class="h-2 rounded-full bg-indigo-400" style="width: 80%" />
            </div>
          </div>
        </div>
        <div class="flex w-full items-start gap-x-4 rounded-10 bg-gray-700 p-4">
          <div
            class="flex items-center justify-center rounded-full bg-green-400 p-2"
          >
           
          </div>
          <div class="flex-1">
            <div class="flex items-center justify-between leading-none">
              <span class="text-white">Complet</span>
            </div>
            <span class="text-sm leading-3 text-gray-200">
              3 months income 50%
            </span>
            <div class="mt-3 h-2 w-full rounded-full bg-gray-900">
              <div class="h-2 rounded-full bg-green-400" style="width: 50%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
