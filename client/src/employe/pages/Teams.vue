<template>
  <div class="flex-1">
    <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
      <div class="flex items-center justify-between">
        <h2 class="text-[20px] font-medium text-white">Groupes</h2>
        <button
          class="inline-flex items-center gap-x-1 rounded-10 bg-gray-700 py-2 px-4 text-sm text-gray-200 hover:text-white"
        >
          <PlusIcon class="h-6 w-6 stroke-current" />
          <span>Créer un groupe</span>
        </button>
      </div>
      <table class="mt-4">
        <thead>
          <tr>
            <td class="py-1 text-sm text-gray-200">label</td>
            <td class="py-1 text-sm text-gray-200">manager</td>
            <td class="py-1 text-sm text-gray-200">membres</td>
            <td class="py-1 text-sm text-gray-200">statut</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="invoice in invoices"
            class="border-b border-gray-700 last:border-none"
            v-bind:key="invoice.no"
          >
            <td class="py-4">
              <span class="text-sm font-medium text-white">
                {{ invoice.no }}
              </span>
            </td>
            <td class="py-4">
              <span class="text-sm text-gray-200">
                {{ invoice.date }}
              </span>
            </td>

            <td class="py">
              <span class="text-sm text-white">
                <div class="flex items-center justify-center">
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
               <router-link to="addMember">
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
                  <span class="text-gray-600 font-bold text-sm">+</span>
                </div>
               </router-link>
              </div>
              </span>
            </td>
            <td class="py-4">
              <div
                class="flex items-center justify-center gap-x-2 rounded-10 border py-2 px-1"
                :class="
                  invoice.status === 'active'
                    ? 'border-green-400/10 bg-green-700/20 text-green-400'
                    : 'border-indigo-400/10 bg-indigo-700/20 text-indigo-400'
                "
              >
                <span
                  class="h-2 w-2 rounded-full"
                  :class="
                    invoice.status === 'active'
                      ? 'bg-green-400'
                      : 'bg-indigo-400'
                  "
                />
                <span class="text-xs">
                  {{ invoice.status }}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      invoices: [
      
        {
          no: "groupe 2",
          date: "wassim lahalali",
          status: "Pending",
        },
          {
          no: "groupe 2",
          date: "wassim lahalali",
          status: "Pending",
        },
      ]
    }
  }
};
</script>
