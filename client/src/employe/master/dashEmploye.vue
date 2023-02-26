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
  { name: "statistiques", icon: BillIcon, route: "statistique" },
  { name: "projets", icon: HomeIcon, route: "project" },
  { name: "créer un projet", icon: HomeIcon, route: "creerProjet" },
  { name: "kanban", icon: BillIcon, route: "kanban" },
  { name: "profile", icon: HomeIcon, route: "profile" },
  { name: "Groupes", icon: HomeIcon, route: "teams" },
];

const recentTransactions = [
  {
    icon: SendIcon,
    type: "Send transaction",
    date: "Dec 24, 2021",
    amount: "$ 123.00",
    balance: "$ 334.00",
  },
  {
    icon: ReceiveIcon,
    type: "Receive fund",
    date: "Jul 20. 2021",
    amount: "$ 322.00",
    balance: "$ 658.00",
  },
];

const invoices = [
  {
    no: "#BCS101",
    date: "Jun 21, 2020",
    avatar: "/img/avatar-2.jpeg",
    name: "Alexandar Parkinson",
    amount: "$ 13435.50",
    status: "Successful",
  },
  {
    no: "#BSD133",
    date: "Jun 21, 2020",
    avatar: "/img/avatar-3.jpeg",
    name: "Natasha Analington",
    amount: "$ 1654.50",
    status: "Pending",
  },
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
          <div>Rire au travail : Parce qu'un sourire peut tout changer.</div>
        </div>
        <div v-if="joke" class="mt-3 text-sm text-gray-400">
          {{ joke }}
        </div>
        <div v-else class="mt-3 text-sm text-gray-400">Loading joke...</div>
        <button
          @click="fetchJoke"
          class="mt-4 w-full rounded-lg bg-gray-700 py-2 text-sm font-normal text-gray-400 hover:text-white"
        >
          une autre
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
              <router-link to="creerProjet"> Créer un projet </router-link>
            </button>
          </div>
        </div>
        <div class="flex w-2/5 items-center justify-between">
          <div class="flex items-center gap-x-2.5">
            <button
              @click="openMail"
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
              src="/img/avatar-1.jpeg"
              alt=""
              class="h-8 w-8 rounded-full object-cover"
            />
            <span class="pl-2 text-sm"
              >{{ currentUser.firstName }} {{ currentUser.lastName }}</span
            >
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
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      joke: "",
    };
  },
  mounted() {
    this.fetchCurrentUser();
    this.fetchJoke();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    ...mapActions(["fetchCurrentUser"]),
    async fetchJoke() {
      try {
        const response = await axios.get(
          "https://v2.jokeapi.dev/joke/Any?type=singlepart&lang=fr&safe=true"
        );
        const jokeData = response.data;

        const joke =
          jokeData.type === "twopart"
            ? `${jokeData.setup} ${jokeData.delivery}`
            : jokeData.joke;
        this.joke = joke;
      } catch (error) {
        console.error(error);
      }
    },
    openMail() {
      window.location.href = "mailto:user@example.com";
    },
  },
};
</script>
