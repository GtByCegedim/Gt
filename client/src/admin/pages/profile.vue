<template>
  <div class="mt-10 flex-1 flex-col items-center">
    <img :src="profileImage" class="mb-4 h-24 w-24 rounded-full object-cover" />
    <h2 class="mb-2 text-xl font-medium text-white">
      {{ currentUser.firstName }} {{ currentUser.lastName }}
    </h2>
    <p class="mb-2 text-sm text-gray-500">{{ currentUser.email }}</p>
    <div class="mb-4 flex items-center">
      <span class="bg-green-500 text-white py-1 px-2 rounded-full text-xs mr-2">{{ profile.findMyProfile.poste }}</span>
      <span class="bg-blue-500 text-white py-1 px-2 rounded-full text-xs">{{ profile.findMyProfile.bisness_unit }}</span>
    </div>
    <div class="w-full">
      <div class="overflow-hidden rounded-lg bg-white shadow-md">
        <div class="border-b p-4">
          <h3 class="font-medium text-gray-600">Informations personnelles</h3>
        </div>
        <div class="p-4">
          <div class="mb-3 flex items-center">
            <span class="mr-2 text-gray-500">Adresse :</span>
            <span class="text-gray-800">{{ profile.findMyProfile.adresse }}</span>
          </div>
          <div class="mb-3 flex items-center">
            <span class="mr-2 text-gray-500">Téléphone :</span>
            <span class="text-gray-800">{{ profile.findMyProfile.telephone }}</span>
          </div>
          <div class="mb-3 flex items-center">
            <span class="mr-2 text-gray-500">Date de naissance :</span>
            <span class="text-gray-800">{{ profile.findMyProfile.date_de_naissance }}</span>
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
    this.fetchProfile();
  },
  computed: {
    ...mapState(["currentUser", "profile"]),
  },
  methods: {
    ...mapActions(["fetchCurrentUser", "fetchProfile"]),
  },
};
</script>
