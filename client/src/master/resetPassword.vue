   <template>
  <div class="relative py-16">
    <div class="container relative m-auto px-6 text-gray-900 md:px-12 xl:px-40">
      <div class="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
        <img
          src="./icons/gt.svg"
          loading="lazy"
          class="ml-4 w-36"
          alt="tailus logo"
        />
        <div class="rounded-3xl border border-gray-400 bg-white shadow-2xl">
          <div class="p-8 py-12 sm:p-16">
            <h2 class="mb-8 text-2xl font-bold text-gray-800">
              Reset Password
            </h2>
            <form @submit.prevent="" class="space-y-8">
              <div class="space-y-2 text-left">
                <label for="email" class="text-gray-900">Email</label>
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="username"
                  class="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600"
                />
              </div>
           
              <button
                type="submit"
                class="before:bg-primary relative flex h-11 w-full items-center justify-center bg-gray-300 px-6 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              >
                <span class="dark:text-dark relative text-base font-semibold"
                  >Connect</span
                >
              </button>
            </form>
          </div>
        </div>
        <div class="space-x-4 text-center text-gray-500">
          <span>&copy; cegedim</span>
          <a href="#" class="hover:text-primary text-sm">About</a>
          <a href="#" class="hover:text-primary text-sm">brogramers</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
}
</script>

