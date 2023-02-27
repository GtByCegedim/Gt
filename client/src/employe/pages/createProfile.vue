<template>
  <div class="mt-2 flex w-2/5 flex-col gap-y-16">
    <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
  
      <div
        class="mt-4 w-full rounded-10 bg-gray-700 py-3 text-gray-200 hover:text-white"
      >
        Remplire les champs et démarer avec votre aventure
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
    <h1 class="text-[30px] font-bold text-indigo-400">Profile</h1>
    <div class="relative py-16">
      <div
        class="container relative m-auto px-6 text-gray-200 md:px-12 xl:px-40"
      >
        <div class="widthFull m-auto space-y-4">
          <div
            class="widthFull rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 backdrop-blur-2xl dark:border-gray-700 dark:bg-gray-800"
          >
            <div class="p-8 py-12 sm:p-16">
              <form @submit.prevent="addProfile" action="" class="space-y-4">
                <div class="space-y-2">
                  <label for="name" class="text-gray-200 dark:text-gray-300"
                    >Télephone</label
                  >
                  <input
                    v-model="telephone"
                    type="text"
                    name="telephone"
                    id="telephone"
                    class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-100 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                  />
                </div>
                <div class="space-y-2">
                  <label
                    for="description"
                    class="text-gray-600 dark:text-gray-300"
                    >Adresse</label
                  >
                  <input
                    v-model="adresse"
                    type="text"
                    name="adresse"
                    id="adresse"
                    class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-100 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                  />
                </div>
                  <div class="space-y-2">
                  <label
                    for="description"
                    class="text-gray-600 dark:text-gray-300"
                    >Bisness unit</label
                  >
                  <input
                    v-model="bisness_unit"
                    type="text"
                    name="bisness_unit"
                    id="bisness_unit"
                    class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-100 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                  />
                </div>
                   <div class="space-y-2">
                  <label
                    for="description"
                    class="text-gray-600 dark:text-gray-300"
                    >Poste</label
                  >
                  <input
                    v-model="poste"
                    type="text"
                    name="poste"
                    id="poste"
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
.parent {
  margin-top: 65px;
}
</style>
<script>

</script>
