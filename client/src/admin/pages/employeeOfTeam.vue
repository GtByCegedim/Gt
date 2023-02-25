<template>
  <div class="flex-1 flex-col">
    <h3 class="py-2 text-left text-2xl font-bold">Membre de groupe : NON DE GROUPE</h3>

    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead
          class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">LastName</th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                FirstName
                <a href="#"></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Email
                <a href="#"></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Post
                <a href="#"></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">Bane</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <th
              scope="row"
              class="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
            >
              {{ user.lastName }}
            </th>
            <td class="py-4 px-6">{{ user.firstName }}</td>
            <td class="py-4 px-6">{{ user.email }}</td>
            <td class="py-4 px-6">Software Engineer</td>
            <td class="py-4 px-6 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >Bane</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
 
};
</script>

<style></style>
