<template>
  <div class="flex  w-2/5 flex-col mt-2 gap-y-16">
     <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">

      <div class="grid grid-cols-3 gap-x-4 pt-">
        <div class="rounded-10 bg-gray-700 p-3">
          <div class="pt-3 text-sm text-white">Gérer vos projets</div>
        </div>
        <div class="rounded-10 bg-gray-700 p-3">
          <div class="pt-3 text-sm text-white">Gérer votre equipes</div>
        </div>
        <div class="rounded-10 bg-gray-700 p-3">
          <div class="pt-3 text-sm text-white">Gérer votre temp</div>
        </div>
      </div>
      <div
        class="mt-4 w-full rounded-10 bg-gray-700 py-3 text-gray-400 hover:text-white"
      >
        Remplire les champs et démarer avec votre équipe
      </div>
    </div>
    <div class="group space-y-2">
      <img
        src="https://c8.alamy.com/compfr/k3nhfw/presentation-du-processus-de-gestion-du-projet-tels-que-l-initiation-la-planification-l-execution-de-suivi-et-de-controle-et-de-fermeture-avec-des-icones-et-un-manager-k3nhfw.jpg"
        alt="art cover"
        loading="lazy"
        width="1000"
        height="667"
        class="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
      />
    </div>
  </div>
  <div class="flex w-3/5 flex-col">
    <h1 class="text-[30px] font-bold text-indigo-400">Créer un projet</h1>
    <div class="relative py-16">
      <div
        class="container relative m-auto px-6 text-gray-200 md:px-12 xl:px-40"
      >
        <div class="widthFull m-auto space-y-4">
          <div
            class="widthFull rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 backdrop-blur-2xl dark:border-gray-700 dark:bg-gray-800"
          >
            <div class="p-8 py-12 sm:p-16">
              <form action="" class="space-y-4">
                <div class="space-y-2">
                  <label for="email" class="text-gray-400 dark:text-gray-300"
                    >nom du projet</label
                  >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="username"
                    class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-100 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                  />
                </div>
                <div class="space-y-2">
                  <label for="email" class="text-gray-600 dark:text-gray-300"
                    >description</label
                  >
                  <input
                    type="text"
                    name="description"
                    id="description"
                    class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-100 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                  />
                </div>
                <div>
                  <div class="flex items-center justify-between space-y-2">
                    <label
                      for="email"
                      class="text-center text-gray-100 dark:text-gray-100"
                      >deadline</label
                    >
                  </div>
                  <input
                    type="date"
                    name="deadline"
                    id="deadline"
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
.parent{
  margin-top: 65px;
}
</style>
<script>
export default {
  data() {
    return {
      firstname: "",
      lasname: "",
      email: "",
    };
  },
  methods: {
    submitForm() {
      // Effectuer les actions nécessaires pour ajouter le projet
      console.log("Nom du projet:", this.firstname);
      console.log("Description:", this.lasname);
      console.log("Date de création:", this.email);

      // Réinitialiser les valeurs des champs du formulaire
      this.firstname = "";
      this.lasname = "";
      this.email = "";
    },
  },
};
</script>
