<template>
  <h1 class="text-2xl text-gray-800">Creer un nouveau employe</h1>
  <section>
    <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
 <div class="grid grid-cols-2 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
  <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
    <form class="shadow-md rounded px-8">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">fistname</label>
        <input v-model="firsname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nom du projet" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">lastname</label>
        <input v-model="lastname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nom du projet" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="description">email</label>
        <textarea v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Description"></textarea>
      </div>
      <div class="flex items-center justify-center pb-3">
        <button type="submit" class="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-5 py-3 text-white sm:w-auto">
          <span class="font-medium">Create </span>
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </form>
  </div>
  <div class="flex justify-between">
    <a href="#" class="block">
      <img alt="Signage" src="https://app.digitalrecruiters.com/generated_contents/images/career_picture/LRPvyza9-careers-0016-srh.jpg" class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72" />
      <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
        <strong class="font-medium">Planification</strong>
        <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
        <p class="mt-0.5 opacity-50 sm:mt-0">Succes/Production</p>
      </div>
    </a>
  </div>
</div>

    </div>
  </section>
</template>

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
