<template>
   <section>
  <div
    class="mx-auto max-w-screen-xl mt-9 px-4 marg py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Party"
          src="./icons/gt.svg"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

        <div
        class="flex flex-col items-center justify-center md:py-24 lg:py-32"
      >
        <h1 class="font-bold text-blue-600 text-9xl">404</h1>
        <p
          class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
        >
          <span class="text-red-500">Oops!</span> Page non trouvé
        </p>
        <p class="mb-8 text-center text-gray-500 md:text-lg">
          Il peux que vous evez entrer un mal chemin 
        </p>
        <router-link
          to="/"
          class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
          >Go home</router-link
        >
      </div>
    </div>
  </div>
</section>

</template>
<script>
export default {
    
}
</script>
<style>
    .marg{
    margin-top: 8%;
}
</style>