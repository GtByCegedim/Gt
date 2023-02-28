<template>
  <div>
    <div class="py-20">
      <div class="mx-auto px-6 xl:container md:px-12">
        <div class="mb-16 md:w-2/3 lg:w-1/2">
          <h2
            class="mb-4 text-2xl font-bold text-white dark:text-white md:text-4xl"
          >
            Tailus blocks leadership
          </h2>
        </div>
        <div
          class="grid gap-6 px-4 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4"
        >
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="group relative space-y-6 overflow-hidden rounded-2xl"
          >
            <img
              class="ransition mx-auto h-[18rem] w-full object-cover object-top grayscale duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-08-512.png"
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div
              class="dark:bg-gray absolute inset-x-0 bottom-0 mt-auto h-max translate-y-24 bg-gray-800 px-8 py-6 transition duration-300 ease-in-out group-hover:translate-y-0"
            >
              <div>
                <h4
                  class="text-gray text-xl font-semibold dark:text-gray-700"
                ></h4>
                <span class="block text-sm text-gray-500"
                  >{{ member.firstName }} {{ member.lastName }}</span
                >
              </div>
              <p class="mt-8 text-gray-300 dark:text-gray-200">
                {{ member.email }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["teamMembers"]),
  },
  methods: {
    ...mapActions(["fetchAllTeamMembers"]),
  },
  mounted() {
    const id = this.$route.params.id;
    this.fetchAllTeamMembers(id);
  },
};
</script>
