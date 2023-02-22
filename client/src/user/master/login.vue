<template>
  <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">GT by Cegedim</h1>

        <p class="mt-4 text-gray-500">
          Get started now! Manage your team and your tasks with us.
        </p>
      </div>

      <form
        @submit.prevent="submitForm"
        action=""
        class="mx-auto mt-8 mb-0 max-w-md space-y-4"
      >
        <div>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <input
              type="email"
              v-model="email"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter email"
            />

            <span
              class="absolute inset-y-0 right-0 grid place-content-center px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>

          <div class="relative">
            <input
              type="password"
              v-model="password"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter password"
            />

            <span
              class="absolute inset-y-0 right-0 grid place-content-center px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="flex-center flex items-center justify-between">
          <button
            type="submit"
            class="inline-block rounded-lg bg-gray-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>

    <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Welcome"
        src="https://images.pexels.com/photos/7793988/pexels-photo-7793988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </section>
</template>

<script>
import { useAuthStore } from "../../stores/Auth";
import { ref } from "vue";

export default {
  setup() {
    const authStore = useAuthStore();

    const email = ref("");
    const password = ref("");

    const submitForm = async () => {
      try {
        await authStore.login({ email: email.value, password: password.value });

        // Redirect to home page or do something else on successful login
      } catch (error) {
        console.error(error);
        // Display error message to user
      }
    };

    return {
      email,
      password,
      submitForm,
    };
  },
};
</script>
