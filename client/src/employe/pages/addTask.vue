<template>
  <div class="mt-2 flex w-2/5 flex-col gap-y-16">
    <h1 class="text-white">les taches réutulisable</h1>
    <div
  class="overflow-x-auto whitespace-nowrap"
>
      <section
        v-for="task in reusableTasks"
        :key="task.id"
        class="m-1 inline-block dark:bg-gray-400 dark:text-gray-50"
      >
        <div
          class="container mx-auto flex flex-col items-center justify-center space-y-8 p-4 md:p-10 lg:flex-row lg:justify-between lg:space-y-0"
        >
          <h1
            class="text-center text-3xl font-semibold leading-tight text-white lg:text-left"
          >
            {{ task.title }}
          </h1>
          <button
            @click="fillForm(task)"
            class="rounded px-8 py-3 text-lg font-semibold dark:bg-violet-400 dark:text-gray-900"
          >
            Utulisé
          </button>
        </div>
      </section>
    </div>
    <button class="bg-white">Voir plus +</button>
  </div>
  <div class="flex w-3/5 flex-col">
    <h1 class="text-[30px] font-bold text-indigo-400">Créer Une tache</h1>
    <div class="relative py-16">
      <div
        class="container relative m-auto px-6 text-gray-200 md:px-12 xl:px-40"
      >
        <div class="widthFull m-auto space-y-4">
          <div
            class="widthFull rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 backdrop-blur-2xl dark:border-gray-700 dark:bg-gray-800"
          >
            <div class="p-8 py-12 sm:p-16">
              <form @submit.prevent="addTAsk" action="" class="space-y-4">
                <div class="space-y-2">
                  <label for="title" class="text-gray-400 dark:text-gray-300"
                    >titre</label
                  >
                  <input
                    v-model="title"
                    type="title"
                    name="title"
                    id="title"
                    autocomplete="title"
                    class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-100 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                  />
                </div>
                <div class="space-y-2">
                  <label
                    for="description"
                    class="text-gray-400 dark:text-gray-300"
                    >description</label
                  >
                  <input
                    v-model="description"
                    type="text"
                    name="description"
                    id="description"
                    autocomplete="description"
                    class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-100 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                  />
                </div>

                <div class="space-y-2">
                  <label for="duration" class="text-gray-400 dark:text-gray-300"
                    >Duration</label
                  >
                  <input
                    v-model="duration"
                    type="Number"
                    name="duration"
                    id="duration"
                    autocomplete="duration"
                    class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-100 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                  />
                  <label for="unit" class="text-gray-400 dark:text-gray-300"
                    >Unité</label
                  >
                  <input
                    v-model="unit"
                    type="unit"
                    name="unit"
                    id="unit"
                    autocomplete="unit"
                    class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-100 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                  />
                </div>

                <div class="space-y-2">
                  <label for="email" class="text-gray-400 dark:text-gray-300"
                    >A qui
                  </label>

                  <input
                    v-model="email"
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-100 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                  />
                </div>
                <div class="space-y-2">
                  <label for="reusable" class="text-gray-400 dark:text-gray-300"
                    >Réutilisable</label
                  >
                  <input
                    v-model="reusable"
                    type="checkbox"
                    name="reusable"
                    id="reusable"
                    class="form-checkbox h-5 w-5 text-cyan-600 dark:border-gray-600"
                  />
                </div>

                <button
                  type="submit"
                  class="before:bg-primary relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span
                    class="relative bg-inherit text-base font-semibold text-white"
                    >Créer</span
                  >
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.widthFull {
  width: 100%;
}
.parent {
  margin-top: 65px;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      description: "",
      duration: "",
      unit: "",
      email: "",
      reusable: false,
      reusableTasks: [],
    };
  },

  methods: {
    fillForm(task) {
      this.title = task.title;
      this.description = task.description;
      this.duration = task.dateTypeId.duration;
      this.unit = task.dateTypeId.unit;
      this.email = "";
    },
    async getReusableTasks() {
      const token = localStorage.getItem("token");
      const url = "http://localhost:3000/api/task/reusable";
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.reusableTasks = response.data.findAllTask;
      } catch (error) {
        console.log(error);
      }
    },
    async addTAsk() {
      const projectId = this.$route.params.id;
      const token = localStorage.getItem("token");
      const url = `http://localhost:3000/api/task/add/${projectId}`;
      const formData = {
        title: this.title,
        description: this.description,
        duration: this.duration,
        unit: this.unit,
        email: this.email,
        reusable: this.reusable,
      };
      console.log(formData);

      try {
        const response = await axios.post(url, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("ajout avec succée");
        alert("La tache a été créée avec succès !");

        // handle successful response
      } catch (error) {
        console.log(error);
        alert("erroooooooooooooooor");
        // handle error response
      }
    },
  },
  async mounted() {
    await this.getReusableTasks();
  },
};
</script>
