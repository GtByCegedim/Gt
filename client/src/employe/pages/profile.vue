<template>
  <div class="mt-10 flex-1 items-center">
     <img src="https://cdn-icons-png.flaticon.com/512/560/560216.png" class="mb-4 image h-24 w-24 rounded-full object-cover" />
    <h2 class="mb-2 text-xl font-medium text-white">
      {{ currentUser.firstName }} {{ currentUser.lastName }}
    </h2>
    <p class="mb-2 text-sm text-gray-500">{{ currentUser.email }}</p>
    <div class="mb-4 flex items-center">
      <span class="mr-2 rounded-full bg-green-400 py-1 px-2 font-extrabold text-xs text-gray-800"
        >{{ profile.findMyProfile.poste }}</span
      >
      <span class="rounded-full bg-indigo-400 py-1 px-2 font-bold text-xs text-gray-900"
        >{{ profile.findMyProfile.bisness_unit }}</span
      >
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
   methods: {
    ...mapActions(["fetchCurrentUser", "fetchProfile"]),
  },
};
</script>
<style>
.image {
  margin-left: 47%;
}
</style>
