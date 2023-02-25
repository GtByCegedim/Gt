<template>
  <div class="mt-10 flex-1 items-center">
    <img
      :src="profileImage"
      class="image mb-4 h-24 w-24 rounded-full object-cover"
    />
    <h2 class="mb-2 text-xl font-medium text-white">
      {{ currentUser.firstName }} {{ currentUser.lastName }}
    </h2>
    <p class="mb-2 text-sm text-gray-500">{{ currentUser.email }}</p>
    <div class="mb-4 flex items-center">
      <span class="mr-2 rounded-full bg-green-500 py-1 px-2 text-xs text-white"
        >Developpeur</span
      >
      <span class="rounded-full bg-blue-500 py-1 px-2 text-xs text-white"
        >CEGEDIM SRH</span
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
            <span class="text-gray-800">Youssoufia ,Maroc</span>
          </div>
          <div class="mb-3 flex items-center">
            <span class="mr-2 text-gray-500">Téléphone :</span>
            <span class="text-gray-800">9655930708</span>
          </div>
          <div class="mb-3 flex items-center">
            <span class="mr-2 text-gray-500">Date de naissance :</span>
            <span class="text-gray-800">02/06/1998</span>
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
  // profileImage: {
  //   type: String,
  //   default:
  //     "https://th.bing.com/th/id/OIP.8t1WtYLAPVB189hu7pCP3gHaHa?pid=ImgDet&rs=1", // add the URL or file path of the image
  // },
};
</script>
<style>
.image {
  margin-left: 47%;
}
</style>
