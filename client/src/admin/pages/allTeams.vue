<template>
  <div class="flex flex-1 flex-col gap-x-6 py-8">
    <h3 class="text-2xl font-bold text-left py-2">All Teams</h3>
    <div class="overflow-x-auto relative  sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Team  
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                manager
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                  </svg></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                created at 
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                  </svg></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                members
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                  </svg></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">view</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               test 1"
            </th>
            <td class="py-4 px-6">
             Wassim lahlali
            </td>
            <td class="py-4 px-6">
              08/02/20123            </td>
             <td class="py-4 px-6">
              <div class="flex items-center justify-start">
                <div
                  class="
                    bg-gray-300
                    w-6
                    h-6
                    rounded-full
                    flex
                    items-center
                    justify-center
                    
                  "
                >
                  <span class="text-gray-600 font-bold text-sm">AB</span>
                </div>
                <div
                   class="
                    bg-gray-300
                    w-6
                    h-6
                    rounded-full
                    flex
                    items-center
                    justify-center
                    
                  "
                >
                  <span class="text-gray-600 font-bold text-sm">CD</span>
                </div>
                <div
                   class="
                    bg-gray-300
                    w-6
                    h-6
                    rounded-full
                    flex
                    items-center
                    justify-center
                    
                  "
                >
                  <span class="text-gray-600 font-bold text-sm">...</span>
                </div>
              </div>
            </td>
            <td class="py-4 px-6 text-right">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">view</a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               test 2
            </th>
            <td class="py-4 px-6">
              Bader abouriel
            </td>
            <td class="py-4 px-6">
              06/02/2023
            </td>
             <td class="py-4 px-6">
              <div class="flex items-center justify-start">
                <div
                  class="
                    bg-gray-300
                    w-6
                    h-6
                    rounded-full
                    flex
                    items-center
                    justify-center
                    
                  "
                >
                  <span class="text-gray-600 font-bold text-sm">AB</span>
                </div>
                <div
                   class="
                    bg-gray-300
                    w-6
                    h-6
                    rounded-full
                    flex
                    items-center
                    justify-center
                    
                  "
                >
                  <span class="text-gray-600 font-bold text-sm">CD</span>
                </div>
                <div
                   class="
                    bg-gray-300
                    w-6
                    h-6
                    rounded-full
                    flex
                    items-center
                    justify-center
                    
                  "
                >
                  <span class="text-gray-600 font-bold text-sm">...</span>
                </div>
              </div>
            </td>
            <td class="py-4 px-6 text-right">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">view</a>
            </td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               test 3 
            </th>
            <td class="py-4 px-6">
              Safia elmaani
            </td>
            <td class="py-4 px-6">
              07/02/2023
            </td>
             <td class="py-4 px-6">
              <div class="flex items-center justify-start">
                <div
                  class="
                    bg-gray-300
                    w-6
                    h-6
                    rounded-full
                    flex
                    items-center
                    justify-center
                    
                  "
                >
                  <span class="text-gray-600 font-bold text-sm">AB</span>
                </div>
                <div
                   class="
                    bg-gray-300
                    w-6
                    h-6
                    rounded-full
                    flex
                    items-center
                    justify-center
                    
                  "
                >
                  <span class="text-gray-600 font-bold text-sm">CD</span>
                </div>
                <div
                   class="
                    bg-gray-300
                    w-6
                    h-6
                    rounded-full
                    flex
                    items-center
                    justify-center
                    
                  "
                >
                  <span class="text-gray-600 font-bold text-sm">...</span>
                </div>
              </div>
            </td>
            <td class="py-4 px-6 text-right">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">view</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>