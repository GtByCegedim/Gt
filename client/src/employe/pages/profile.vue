<template>
  <div class="flex-1 items-center mt-10">
    <img  :src="profileImage" class="w-24 image  h-24 rounded-full object-cover mb-4" />
    <h2 class="text-xl font-medium text-gray-800 mb-2">Lahlali Wassim</h2>
    <p class="text-gray-500 text-sm mb-2">wlahlali343@gmail.com</p>
    <div class="flex items-center mb-4">
      <span class="bg-green-500 text-white py-1 px-2 rounded-full text-xs mr-2"
        >Developpeur</span
      >
      <span class="bg-blue-500 text-white py-1 px-2 rounded-full text-xs"
        >CEGEDIM SRH</span
      >
    </div>
    <div class="w-full">
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-4 border-b">
          <h3 class="font-medium text-gray-600">Informations personnelles</h3>
        </div>
        <div class="p-4">
          <div class="flex items-center mb-3">
            <span class="text-gray-500 mr-2">Adresse :</span>
            <span class="text-gray-800">Youssoufia ,Maroc</span>
          </div>
          <div class="flex items-center mb-3">
            <span class="text-gray-500 mr-2">Téléphone :</span>
            <span class="text-gray-800">9655930708</span>
          </div>
          <div class="flex items-center mb-3">
            <span class="text-gray-500 mr-2">Date de naissance :</span>
            <span class="text-gray-800">02/06/1998</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    name: String,
    email: String,
    role: String,
    department: String,
    address: String,
    phone: String,
    birthDate: String,
    profileImage: {
      type: String,
      default: "https://th.bing.com/th/id/OIP.8t1WtYLAPVB189hu7pCP3gHaHa?pid=ImgDet&rs=1", // add the URL or file path of the image
    },
  },
};
</script>
<style>
.image{
  margin-left: 47%;
}
</style>
