<template>
  <div class="flex w-3/5 flex-col">
    <h1 class="text-[30px] font-bold text-indigo-400">Ajouter un Employe</h1>
    <div class="relative py-16">
      <div
        class="container relative m-auto px-6 text-gray-200 md:px-12 xl:px-40"
      >
        <div class="widthFull m-auto space-y-4">
          <div
            class="widthFull rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 backdrop-blur-2xl dark:border-gray-700 dark:bg-gray-800"
          >
            <div class="p-8 py-12 sm:p-16">
              <form @submit.prevent="submitForm" action="" class="space-y-4">
                <div class="space-y-2">
                  <label
                    for="firstname"
                    class="text-gray-600 dark:text-gray-300"
                    >firstname</label
                  >
                  <input
                    v-model="firstName"
                    type="text"
                    name="firstname"
                    id="firstname"
                    class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                  />
                </div>
                <div class="space-y-2">
                  <label for="lastname" class="text-gray-600 dark:text-gray-300"
                    >lastName</label
                  >
                  <input
                    v-model="lastName"
                    type="text"
                    name="lastname"
                    id="lastname"
                    class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                  />
                </div>
                <div>
                  <div class="flex items-center justify-between space-y-2">
                    <label
                      for="email"
                      class="text-center text-gray-600 dark:text-gray-300"
                      >email</label
                    >
                  </div>
                  <input
                    v-model="email"
                    type="email"
                    name="email"
                    id="email"
                    class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                  />
                </div>

                <button
                  type="submit"
                  class="before:bg-primary relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span
                    class="dark:text-dark relative text-base font-semibold text-white"
                    >ajouter</span
                  >
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex w-2/5 flex-col gap-y-8">
    <div class="group space-y-6">
      <img
        src="https://images.pexels.com/photos/8866738/pexels-photo-8866738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="art cover"
        loading="lazy"
        width="1000"
        height="667"
        class="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
      />
      <h3 class="text-3xl font-semibold text-gray-800 dark:text-white">
        Enrechie votre entreprise par des nouveaux employes
      </h3>
    </div>
    <div class="group space-y-6">
      <img
        src="https://images.pexels.com/photos/8867472/pexels-photo-8867472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="art cover"
        loading="lazy"
        width="1000"
        height="667"
        class="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
      />
    </div>
  </div>
</template>
<style>
.widthFull {
  width: 100%;
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "http://localhost:3000/api/employe/add",
          {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        // Réinitialiser les valeurs des champs du formulaire
        this.firstName = "";
        this.lastName = "";
        this.email = "";
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
