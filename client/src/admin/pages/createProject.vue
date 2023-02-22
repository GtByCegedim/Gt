<<<<<<< HEAD
<template>
  <div class="w-full max-w-md">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">
          Nom du projet
        </label>
        <input
          v-model="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Nom du projet"
        >
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="description">
          Description
        </label>
        <textarea
          v-model="description"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          placeholder="Description"
        ></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="created-at">
          Date de création
        </label>
        <input
          v-model="createdAt"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="created-at"
          type="date"
        >
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="manager">
          Responsable du projet
        </label>
        <input
          v-model="manager"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="manager"
          type="text"
          placeholder="Responsable du projet"
        >
      </div>
      <div class="flex items-center justify-between">
        <button
          @click.prevent="submitForm"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Ajouter le projet
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'ddd',
      description: 'ddd',
      createdAt:'ddd',
      manager: 'ddd'
    }
  },
  methods: {
    submitForm() {
      // Effectuer les actions nécessaires pour ajouter le projet
      console.log('Nom du projet:', this.name)
      console.log('Description:', this.description)
      console.log('Date de création:', this.createdAt)
      console.log('Responsable:', this.manager)

      // Réinitialiser les valeurs des champs du formulaire
      this.name = ''
      this.description = ''
      this.createdAt = ''
      this.manager = ''
    }
  }
}
=======
<template>
  <div class="w-full max-w-md">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">
          Nom du projet
        </label>
        <input
          v-model="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Nom du projet"
        >
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="description">
          Description
        </label>
        <textarea
          v-model="description"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          placeholder="Description"
        ></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="created-at">
          Date de création
        </label>
        <input
          v-model="createdAt"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="created-at"
          type="date"
        >
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="manager">
          Responsable du projet
        </label>
        <input
          v-model="manager"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="manager"
          type="text"
          placeholder="Responsable du projet"
        >
      </div>
      <div class="flex items-center justify-between">
        <button
          @click.prevent="submitForm"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Ajouter le projet
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'ddd',
      description: 'ddd',
      createdAt:'ddd',
      manager: 'ddd'
    }
  },
  methods: {
    submitForm() {
      // Effectuer les actions nécessaires pour ajouter le projet
      console.log('Nom du projet:', this.name)
      console.log('Description:', this.description)
      console.log('Date de création:', this.createdAt)
      console.log('Responsable:', this.manager)

      // Réinitialiser les valeurs des champs du formulaire
      this.name = ''
      this.description = ''
      this.createdAt = ''
      this.manager = ''
    }
  }
}
>>>>>>> 3f31af57d2dbc5d5f9225cbe97e50cd419e81ad5
</script>