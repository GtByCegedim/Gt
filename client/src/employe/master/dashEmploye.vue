<script setup>
import HomeIcon from "./icons/home.svg";
import BillIcon from "./icons/bill.svg";
import InvoiceIcon from "./icons/invoice.svg";
import BuildingIcon from "./icons/building.svg";
import DashboardIcon from "./icons/gt.svg";
import SearchIcon from "./icons/search.svg";
import MailIcon from "./icons/mail.svg";
import BellIcon from "./icons/bell.svg";
import InboxIcon from "./icons/inbox.svg";
import ChevronDownIcon from "./icons/chevron-down.svg";
import CreditCardIcon from "./icons/credit-card.svg";
import StatisticChart from "./charts/statistic.svg";
import SendIcon from "./icons/send.svg";
import ReceiveIcon from "./icons/receive.svg";


const menu = [
  { name: "statistiques", icon: BillIcon, route: "/dashemploye/statistique" },
  { name: "projets", icon: HomeIcon, route: "/dashemploye/project" },
  { name: "créer un projet", icon: InvoiceIcon, route: "/dashemploye/creerProjet" },
  { name: "profile", icon: StatisticChart, route: "/dashemploye/profile" },
  { name: "Groupes", icon: CreditCardIcon, route: "/dashemploye/teams" },
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
            class="flex items-center gap-x-4 text-gray-100 hover:font-medium hover:text-green-400 focus:font-medium focus:text-indigo-400 focus:outline-none"
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
        <div v-if="joke" class="mt-3 text-sm text-gray-200">
          {{ joke }}
        </div>
        <div v-else class="mt-3 text-sm text-gray-200">Loading joke...</div>
        <button
          @click="fetchJoke"
          class="mt-4 w-full rounded-lg bg-gray-700 py-2 text-sm font-normal text-gray-200 hover:text-white"
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
          <h1 class="text-[30px] font-bold">
            <span class="text-green-400">BRO</span
            ><span class="text-indigo-400">GRAMMERS</span>
          </h1>
          <div class="flex items-center gap-x-2">
            <div class="relative">
              <span
                class="pointer-events-none absolute inset-y-0 flex items-center px-3"
              >
                <SearchIcon class="h-6 w-6 stroke-current text-gray-200" />
              </span>
              <input
                type="text"
                placeholder="Search"
                class="rounded-10 bg-gray-900 py-3 pr-4 pl-10 text-sm text-gray-200 focus:text-white focus:outline-none"
              />
            </div>
            <button
              class="rounded-10 bg-gray-900 py-3 px-4 text-sm text-gray-200 hover:text-white"
            >
              <router-link to="creerProjet"> Créer un projet </router-link>
            </button>
          </div>
        </div>
        <div class="flex w-2/5 items-center justify-between">
          <div class="flex items-center gap-x-2.5">
            <button
              @click="openMail"
              class="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-gray-200 hover:text-white"
            >
              <MailIcon class="h-7 w-7 stroke-current" />
            </button>
            <button
              class="relative flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-gray-200 hover:text-white"
            >
              <BellIcon class="h-7 w-7 stroke-current" />
              <div class="absolute top-3 right-3 flex h-2 w-2">
                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"
                />
                <span class="inline-flex h-2 w-2 rounded-full bg-indigo-400" />
              </div>
            </button>
            <router-link
              to="/dashemploye/addtask"
              class="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-gray-200 hover:text-white"
            >
              <InboxIcon class="h-7 w-7 stroke-current" />
            </router-link>
          </div>
          <div class="relative">
            <button
              class="flex h-11 items-center justify-center rounded-full bg-gray-900 px-2 text-gray-200 hover:text-white"
              @click="toggleDropdown"
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-08-512.png"
                alt=""
                class="h-8 w-8 rounded-full object-cover"
              />
              <span class="pl-2 text-sm">
                {{ currentUser.firstName }} {{ currentUser.lastName }}</span
              >
              <ChevronDownIcon class="h-6 w-6 stroke-current" />
            </button>
            <div
              v-if="showDropdown"
              class="absolute top-12 right-0 bg-white py-2 shadow-lg"
            >
            <button
                class="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900"
                @click="logout"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 4.293a1 1 0 0 0-1.414 0L10 5.586V2a1 1 0 1 0-2 0v3.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414zM6 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6-7a7.001 7.001 0 0 0-6.062 10.391l1.472-1.473A5.002 5.002 0 0 1 15 10c0 2.757-2.243 5-5 5s-5-2.243-5-5 2.243-5 5-5a4.996 4.996 0 0 1 4.903 4.098l1.473-1.472A7 7 0 0 0 12 3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Logout</span>
              </button>
              <button
                class="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900"
                @click="logout"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 4.293a1 1 0 0 0-1.414 0L10 5.586V2a1 1 0 1 0-2 0v3.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414zM6 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6-7a7.001 7.001 0 0 0-6.062 10.391l1.472-1.473A5.002 5.002 0 0 1 15 10c0 2.757-2.243 5-5 5s-5-2.243-5-5 2.243-5 5-5a4.996 4.996 0 0 1 4.903 4.098l1.473-1.472A7 7 0 0 0 12 3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
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
      turn:0
    };
  },
  mounted() {
    this.fetchCurrentUser();
    this.fetchJoke();
  },
  computed: {
    ...mapState(["currentUser"]),
    ...mapState(["showDropdown"]),
  },
  methods: {
    ...mapActions(["fetchCurrentUser"]),
    ...mapActions(["logout"]),
    toggleDropdown() {
      this.$store.state.showDropdown = !this.$store.state.showDropdown;
    },
    async fetchJoke() {

      try {
      if(this.turn <= 3) {
        const response = await axios.get(
          "https://v2.jokeapi.dev/joke/Any?type=singlepart&lang=fr&safe=true"
        );
        const jokeData = response.data;

        const joke =
          jokeData.type === "twopart"
            ? `${jokeData.setup} ${jokeData.delivery}`
            : jokeData.joke;
        this.joke = joke;
        this.turn ++
      }
      else {
        this.joke = "ser takhdam";
      }
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
