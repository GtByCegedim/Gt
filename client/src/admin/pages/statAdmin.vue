<script >

export default {
  data() {
    return {
      invoices: [
        {
          no: "groupe 1",
          date: "wassim lahali",
          amount : "ws,sm,ba",
          status: "Successful",
        },
        {
          no: "groupe 2",
          date: "wassim lahalali",
          amount : "sc,fsf",
          status: "Pending",
        },
      ]
    }
  }
}

</script>
<template>
  <div class="flex w-3/5 flex-col gap-y-8">
    <div
      class="flex items-center justify-between rounded-10 bg-gray-900 bg-[url('/img/line-pattern.svg')] p-7"
    >
      <div class="flex items-center gap-x-4">
        <div class="rounded-full bg-gray-700 p-3">
          <CreditCardIcon class="h-5 w-5 fill-current text-indigo-400" />
        </div>
        <div>
          <div class="text-sm text-gray-400">NOM COMPLET</div>
          <div class="pt-1 text-white">Lahlali Wassim</div>
        </div>
      </div>
      <div class="h-full w-px bg-gray-700" />
      <div>
        <div class="text-sm text-gray-400">DATE</div>
        <div class="pt-1 text-white">01/03/2023</div>
      </div>
      <div class="h-full w-px bg-gray-700" />

      <div class="h-full w-px bg-gray-700" />
      <div>
        <div class="text-sm text-gray-400">POSTE</div>
        <div class="pt-1 text-white">developeur</div>
      </div>
    </div>
    <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
      <div class="flex items-center justify-between">
        <h2 class="text-[20px] font-medium text-white">
          Statistiques des projets
        </h2>
        <button
          class="inline-flex items-center gap-x-1 rounded-10 bg-gray-700 py-2 px-4 text-sm text-gray-400 hover:text-white"
        >
          <span>Jan - Aug</span>
          <ChevronDownIcon class="h-6 w-6 stroke-current" />
        </button>
      </div>
      <div class="flex gap-x-8 pt-8">
        <StatisticChart class="w-full" />
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-x-3 rounded-10 bg-indigo-400 p-4">
            <div class="rounded-full bg-gray-900 p-2 text-indigo-700">
              <RevenueIcon class="h-6 w-6 fill-current" />
            </div>
            <div>
              <div class="text-sm text-indigo-700">En cours</div>
              <div class="font-normal">10</div>
            </div>
          </div>
          <div class="flex items-center gap-x-3 rounded-10 bg-green-400 p-4">
            <div class="rounded-full bg-gray-900 p-2 text-green-700">
              <ExpenseIcon class="h-6 w-6 fill-current" />
            </div>
            <div>
              <div class="text-sm text-green-700">Finis</div>
              <div class="font-normal">14</div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
      <div class="flex items-center justify-between">
        <h2 class="text-[20px] font-medium text-white">Groupes</h2>
        <button
          class="inline-flex items-center gap-x-1 rounded-10 bg-gray-700 py-2 px-4 text-sm text-gray-400 hover:text-white"
        >
          <PlusIcon class="h-6 w-6 stroke-current" />
          <span>Voir tout</span>
        </button>
      </div>
      <table class="mt-4">
        <thead>
          <tr>
            <td class="py-1 text-sm text-gray-400">label</td>
            <td class="py-1 text-sm text-gray-400">manager</td>
            <td class="py-1 text-sm text-gray-400">membres</td>
             <td class="py-1 text-sm text-gray-400">statut</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="invoice in invoices"
            class="border-b border-gray-700 last:border-none"
          >
            <td class="py-4">
              <span class="text-sm font-medium text-white">
                {{ invoice.no }}
              </span>
            </td>
            <td class="py-4">
              <span class="text-sm text-gray-400">
                {{ invoice.date }}
              </span>
            </td>
           
            <td class="py-4">
              <span class="text-sm text-white">
                {{ invoice.amount }}
              </span>
            </td>
            <td class="py-4">
              <div
                class="flex items-center justify-center gap-x-2 rounded-10 border py-2 px-1"
                :class="
                  invoice.status === 'Successful'
                    ? 'border-green-400/10 bg-green-700/20 text-green-400'
                    : 'border-indigo-400/10 bg-indigo-700/20 text-indigo-400'
                "
              >
                <span
                  class="h-2 w-2 rounded-full"
                  :class="
                    invoice.status === 'Successful'
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
  <div class="flex w-2/5 flex-col gap-y-8">
    <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
      <div class="flex items-center justify-between">
        <h2 class="text-[20px] font-medium text-white">Projets</h2>
       
      </div>
      <div class="grid grid-cols-3 gap-x-4 pt-4">
        <div class="rounded-10 bg-gray-700 p-3">
          <div class="pt-3 text-sm text-white">Projet 1</div>
        </div>
        <div class="rounded-10 bg-gray-700 p-3">
          <div class="pt-3 text-sm text-white">Projet 2</div>
        </div>
        <div class="rounded-10 bg-gray-700 p-3">
          <div class="pt-3 text-sm text-white">Projet 3</div>
        </div>
      </div>
      <button
        class="mt-4 w-full rounded-10 bg-gray-700 py-3 text-gray-400 hover:text-white"
      >
        voir tous les projets
      </button>
    </div>
    <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
      <div class="flex items-center justify-between">
        <h2 class="text-[20px] font-medium text-white">taches</h2>
        <button
          class="inline-flex items-center gap-x-1 rounded-10 bg-gray-700 py-2 px-4 text-sm text-gray-400 hover:text-white"
        >
          <span>Projet</span>
          <ChevronDownIcon class="h-6 w-6 stroke-current" />
        </button>
      </div>
      <div class="flex flex-col gap-y-4 pt-4">
        <div class="flex w-full items-start gap-x-4 rounded-10 bg-gray-700 p-4">
          <div
            class="flex items-center justify-center rounded-full bg-indigo-800 p-2"
          >
            <InvestmentIcon class="h-5 w-5 fill-current text-gray-900" />
          </div>
          <div class="flex-1">
            <div class="flex items-center justify-between leading-none">
              <span class="text-white">A faire</span>
            </div>
            <span class="text-sm leading-3 text-gray-400">
              2 months income 80%
            </span>
            <div class="mt-3 h-2 w-full rounded-full bg-gray-900">
              <div class="h-2 rounded-full bg-indigo-400" style="width: 80%" />
            </div>
          </div>
        </div>
        <div class="flex w-full items-start gap-x-4 rounded-10 bg-gray-700 p-4">
          <div
            class="flex items-center justify-center rounded-full bg-green-400 p-2"
          >
            <FundIcon class="h-5 w-5 fill-current text-gray-900" />
          </div>
          <div class="flex-1">
            <div class="flex items-center justify-between leading-none">
              <span class="text-white">Complet</span>
            </div>
            <span class="text-sm leading-3 text-gray-400">
              3 months income 50%
            </span>
            <div class="mt-3 h-2 w-full rounded-full bg-gray-900">
              <div class="h-2 rounded-full bg-green-400" style="width: 50%" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between rounded-10 bg-gray-900 p-7">
      <div class="flex items-center justify-between">
        <h2 class="text-[20px] font-medium text-white">Revenue statistic</h2>
        <button class="p-2 text-gray-400 hover:text-white">
          <DotsCircleIcon class="h-6 w-6 fill-current" />
        </button>
      </div>
      <div class="flex items-center gap-x-4 pt-4">
        <div class="rounded-10 bg-gray-700 p-4">
          <DoughnutChart />
        </div>
        <div class="flex flex-1 flex-col gap-4">
          <div class="flex items-center gap-x-3 rounded-10 bg-indigo-400 p-4">
            <div class="rounded-full bg-gray-900 p-2 text-indigo-700">
              <InvestmentIcon class="h-6 w-6 fill-current" />
            </div>
            <div>
              <div class="text-sm text-indigo-700">Investment</div>
            </div>
          </div>
          <div class="flex items-center gap-x-3 rounded-10 bg-green-400 p-4">
            <div class="rounded-full bg-gray-900 p-2 text-green-700">
              <FundIcon class="h-6 w-6 fill-current" />
            </div>
            <div>
              <div class="text-sm text-green-700">Mutual Fund</div>
              <div class="font-normal">$8.576</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
