<template>
  <div class="mt-2 flex w-2/5 flex-col gap-y-16">
    <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
      <div class="pt- grid grid-cols-3 gap-x-4">
        <div class="rounded-10 bg-gray-700 p-3">
          <div class="pt-3 text-sm text-white">creer une tache</div>
        </div>
        <div class="rounded-10 bg-gray-700 p-3">
          <div class="pt-3 text-sm text-white">Assignées à membre</div>
        </div>
        <div class="rounded-10 bg-gray-700 p-3">
          <div class="pt-3 text-sm text-white">
            Envoyer un message par email
          </div>
        </div>
      </div>
      <div
        class="mt-4 w-full rounded-10 bg-gray-700 py-3 text-gray-200 hover:text-white"
      >
        Créer des tache et demarer votre aventure avec autre employés
      </div>
    </div>
    <div class="group space-y-2">
      <img
        src="./assets/kanban.png"
        alt="art cover"
        loading="lazy"
        width="1000"
        height="667"
        class="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
      />
    </div>
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

                <button
                  type="submit"
                  class="before:bg-primary relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span
                    class="dark:text-dark relative text-base font-semibold text-white"
                    >Créer</span
                  >
                </button>
              </form>
            </div>3
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
import axios from 'axios';
export default {
  data() {
    return {
      title: "",
      description: "",
      duration: "",
      unit: "",
      email: "",
    };
  },
  methods: {
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
      };
      try {
        const response = await axios.post(url, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('ajout avec succée');
        alert("La tache a été créée avec succès !");

        // handle successful response
      } catch (error) {
        console.log(error);
        alert('erroooooooooooooooor')
        // handle error response
      }
    },
  },
};
</script>
