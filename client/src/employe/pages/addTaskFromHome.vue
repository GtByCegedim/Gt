<template>
  <section class="h-full p-6 dark:bg-gray-800 dark:text-gray-50">
    <h1 class="text-[30px] font-bold text-indigo-400">Créer une Tache</h1>
    <form
      @submit.prevent="submitTask"
      class="ng-untouched container mx-auto flex max-h-full flex-col space-y-12"
    >
      <fieldset
        class="grid grid-cols-4 gap-6 rounded-md p-6 shadow-sm dark:bg-gray-900"
      >
        <div class="col-span-full space-y-2 lg:col-span-1">
          <p class="font-medium">Choisissez le Projet</p>
          <p class="text-xs">et Ajouter une nouvele tache</p>
          <div>
            <div class="m-6 text-center">
              <button
                type="submit"
                class="rounded-md bg-indigo-400 px-4 py-2 text-white hover:bg-indigo-500"
              >
                Ajouter
              </button>
            </div>

            <div class="col-span-full sm:col-span-3">
              <label for="checkbox" class="text-sm">réutilisable</label>
              <input
                id="checkbox"
                type="checkbox"
                v-model="reusable"
                class="rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
          </div>
        </div>
        <div class="col-span-full grid grid-cols-6 gap-4 lg:col-span-3">
          <div class="col-span-full">
            <label for="firstname" class="text-sm">titre</label>
            <input
              id="firstname"
              type="text"
              placeholder="Titre de tache"
              v-model="title"
              class="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
            />
          </div>

          <!-- <div class="col-span-full sm:col-span-3">
            <label for="email" class="text-sm">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              class="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
            />
          </div> -->
          <div class="col-span-full">
            <label for="bio" class="text-sm">Description</label>
            <textarea
              id="bio"
              placeholder=""
              v-model="description"
              class="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
            ></textarea>
          </div>
          <div class="col-span-full sm:col-span-2">
            <label for="city" class="text-sm">durée</label>
            <input
              id="city"
              type="text"
              placeholder=""
              v-model="duration"
              class="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div class="col-span-full sm:col-span-2">
            <label for="state" class="text-sm">Heures / Points</label>
            <input
              id="state"
              type="text"
              placeholder=""
              v-model="unit"
              class="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div class="col-span-full sm:col-span-2">
            <label for="project" class="text-sm">Projet</label>
            <select
              id="project"
              v-model="selectedProject"
              class="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
            >
              <option
                v-for="project in myProjects"
                :key="project.id"
                :value="project.id"
              >
                {{ project.name }}
              </option>
            </select>
          </div>
          <div class="col-span-full sm:col-span-2">
            <label for="assignedTo" class="text-sm">Assigné à</label>
            <select
              id="assignedTo"
              v-model="selectedAssignee"
              class="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
            >
              <option
                v-for="member in teamMembers"
                :key="member.id"
                :value="member.id"
              >
                {{ member.email }}
              </option>
            </select>
          </div>
        </div>
      </fieldset>
    </form>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { ref, watch } from "vue";
import axios from "axios";

export default {
  setup() {
    const selectedProject = ref(null);
    const selectedAssignee = ref(null);
    const title = ref("");
    const description = ref("");
    const duration = ref("");
    const unit = ref("");
    const reusable = ref(false);

    return {
      selectedProject,
      selectedAssignee,
      title,
      description,
      duration,
      unit,
      reusable,
    };
  },
  computed: {
    ...mapState(["myProjects", "teamMembers"]),
  },
  methods: {
    async addTask({ title, description, duration, unit, name, email, check }) {
      try {
        const token = localStorage.getItem("token");
        console.log("Token:", token);

        const payload = {
          title,
          description,
          duration,
          unit,
          name,
          email,
          check,
        };
        console.log("Payload:", payload); // Log the payload for debugging

        const response = await axios.post(
          "http://localhost:3000/api/task/add",
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    ...mapActions(["fetchMyProjects", "fetchAllTeamMembers"]),
    async submitTask() {
      const selectedProjectName = this.myProjects.find(
        (project) => project.id === this.selectedProject
      ).name;

      const selectedAssigneeEmail = this.teamMembers.find(
        (member) => member.id === this.selectedAssignee
      ).email;

      try {
        await this.addTask({
          title: this.title,
          description: this.description,
          duration: this.duration,
          unit: this.unit,
          name: selectedProjectName,
          email: selectedAssigneeEmail,
          check: this.reusable,
        });
        alert("Task added successfully");
      } catch (error) {
        alert("Error adding task: " + error.message);
      }
    },
  },
  async created() {
    await this.fetchMyProjects();
  },
  mounted() {
    watch(
      () => this.selectedProject,
      async (newProjectId, oldProjectId) => {
        if (newProjectId !== oldProjectId) {
          await this.fetchAllTeamMembers(newProjectId);
        }
      }
    );
  },
};
</script>
