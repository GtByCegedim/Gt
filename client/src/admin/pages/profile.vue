<template>
  <div class="flex flex-col items-center mt-10">
    <img :src="profileImage" class="w-24 h-24 rounded-full object-cover mb-4">
    <h2 class="text-xl font-medium text-white mb-2">{{ currentUser.firstName }} {{ currentUser.lastName }}</h2>
    <p class="text-gray-500 text-sm mb-2">{{ currentUser.email }}</p>
    <div class="flex items-center mb-4">
      <span class="bg-green-500 text-white py-1 px-2 rounded-full text-xs mr-2">{{ role }}</span>
      <span class="bg-blue-500 text-white py-1 px-2 rounded-full text-xs">{{ department }}</span>
    </div>
    <div class="w-full">
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-4 border-b">
          <h3 class="font-medium text-gray-600">Informations personnelles</h3>
        </div>
        <div class="p-4">
          <div class="flex items-center mb-3">
            <span class="text-gray-500 mr-2">Adresse :</span>
            <span class="text-gray-800">{{ address }}</span>
          </div>
          <div class="flex items-center mb-3">
            <span class="text-gray-500 mr-2">Téléphone :</span>
            <span class="text-gray-800">{{ phone }}</span>
          </div>
          <div class="flex items-center mb-3">
            <span class="text-gray-500 mr-2">Date de naissance :</span>
            <span class="text-gray-800">{{ birthDate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  mounted() {
    this.fetchCurrentUser();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    ...mapActions(["fetchCurrentUser"]),
  },
}
</script>
