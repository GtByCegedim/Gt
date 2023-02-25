<script setup>
import HomeIcon from "./icons/home.svg";
import BillIcon from "./icons/bill.svg";
import InvoiceIcon from "./icons/invoice.svg";
import BuildingIcon from "./icons/building.svg";
import CardIcon from "./icons/card.svg";
import SettingsIcon from "./icons/settings.svg";
import DashboardIcon from "./icons/gt.svg";
import SearchIcon from "./icons/search.svg";
import MailIcon from "./icons/mail.svg";
import BellIcon from "./icons/bell.svg";
import InboxIcon from "./icons/inbox.svg";
import ChevronDownIcon from "./icons/chevron-down.svg";
import CreditCardIcon from "./icons/credit-card.svg";
import EyeIcon from "./icons/eye.svg";
import StatisticChart from "./charts/statistic.svg";
import RevenueIcon from "./icons/revenue.svg";
import ExpenseIcon from "./icons/expense.svg";
import SendIcon from "./icons/send.svg";
import ReceiveIcon from "./icons/receive.svg";
import CalendarIcon from "./icons/calendar.svg";
import PlusIcon from "./icons/plus.svg";
import InvestmentIcon from "./icons/investment.svg";
import FundIcon from "./icons/fund.svg";
import DotsCircleIcon from "./icons/dots-circle.svg";
import DoughnutChart from "./charts/doughnut.svg";
const menu = [
  { name: "Statistiques", icon: BillIcon, route: "statAdmin" },
  { name: "Projets", icon: BillIcon, route: "project" },
  { name: "Groupes", icon: BillIcon, route: "allteams" },
  { name: "Employes", icon: BillIcon, route: "employe" },
  { name: "ajouter un Employe", icon: BillIcon, route: "newEmploye" },
];




</script>

<template>
  <div class="flex min-h-screen w-full bg-gray-700 font-sans">
    <aside class="flex w-64 flex-col px-4 pt-10 pb-6">
      <div class="ml-6 h-10 w-1/3">
        <router-link to="/">
          <DashboardIcon class="text-white" />
        </router-link>
      </div>

      <ul class="flex flex-1 flex-col gap-y-10 px-8 pt-14">
        <li v-for="item in menu" :key="item.name">
          <component :is="item.icon" class="h-6 w-6 stroke-current" />
          <router-link
            :to="item.route"
            class="flex items-center gap-x-4 text-gray-400 hover:font-medium hover:text-white focus:font-medium focus:text-white focus:outline-none"
          >
            <span>{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
      <div
        class="sticky bottom-4 rounded-10 bg-gray-900 bg-[url(/img/line-pattern.svg)] bg-top p-6"
      >
        <div class="text-white">
          Refer a friend and get <span class="font-bold">$5</span>
        </div>
        <div class="mt-3 text-sm text-gray-400">The reward of transfer.</div>
        <button
          class="mt-4 w-full rounded-lg bg-gray-700 py-2 text-sm font-normal text-gray-400 hover:text-white"
        >
          Invite
        </button>
      </div>
    </aside>
    <main
      class="flex min-h-screen flex-1 flex-col rounded-l-[48px] bg-gray-800 p-8"
    >
      <nav class="flex items-center gap-x-6">
        <div class="flex w-3/5 items-center justify-between">
          <h1 class="text-[30px] font-bold text-white">Overview</h1>
          <div class="flex items-center gap-x-2">
            <div class="relative">
              <span
                class="pointer-events-none absolute inset-y-0 flex items-center px-3"
              >
                <SearchIcon class="h-6 w-6 stroke-current text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Search"
                class="rounded-10 bg-gray-900 py-3 pr-4 pl-10 text-sm text-gray-400 focus:text-white focus:outline-none"
              />
            </div>
            <button
              class="rounded-10 bg-gray-900 py-3 px-4 text-sm text-gray-400 hover:text-white"
            >
              Ajouter un employe
            </button>
          </div>
        </div>
        <div class="flex w-2/5 items-center justify-between">
          <div class="flex items-center gap-x-2.5">
            <button
              class="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-gray-400 hover:text-white"
            >
              <MailIcon class="h-7 w-7 stroke-current" />
            </button>
            <button
              class="relative flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-gray-400 hover:text-white"
            >
              <BellIcon class="h-7 w-7 stroke-current" />
              <div class="absolute top-3 right-3 flex h-2 w-2">
                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"
                />
                <span class="inline-flex h-2 w-2 rounded-full bg-indigo-400" />
              </div>
            </button>
            <button
              class="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-gray-400 hover:text-white"
            >
              <InboxIcon class="h-7 w-7 stroke-current" />
            </button>
          </div>
          <button
            class="flex h-11 items-center justify-center rounded-full bg-gray-900 px-2 text-gray-400 hover:text-white"
          >
            <img
              src="data:image/png;base64,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"
              alt=""
              class="h-8 w-8 rounded-full object-cover"
            />
            <span class="pl-2 text-sm">{{ currentUser.firstName }}  {{ currentUser.lastName }}</span>
            <ChevronDownIcon class="h-6 w-6 stroke-current" />
          </button>
        </div>
      </nav>
      <div class="flex gap-x-6 py-8">
        <router-view></router-view>
      </div>
    </main>
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
};
</script>