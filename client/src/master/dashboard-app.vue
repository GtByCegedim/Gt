<template>
  <div class="h-screen w-screen">
    <div class="flex h-full">
      <!-- Sidebar -->
      <transition name="fade" mode="out-in">
        <div
          class="w-[400px] h-full text-white transition"
          v-show="showSideBar"
        >
          <div class="h-[50px] bg-gray-900 flex items-center">
            <div class="font-bold text-xl px-[20px]">Employee Dashboard</div>
          </div>
          <div class="bg-gray-800 h-[calc(100%-50px)] px-[20px] py-[20px]">
            <div class="flex flex-col justify-between h-full">
              <div class="flex flex-col space-y-[10px]">
                <router-link
                  to="/Myprojects"
                  class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
                >
                  <svg
                    aria-hidden="true"
                    class="mr-2 w-[25px] h-[25px] fill-current"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 7H2C0.897 7 0 7.897 0 9V18C0 19.103 0.897 20 2 20H22C23.103 20 24 19.103 24 18V9C24 7.897 23.103 7 22 7ZM22 18H2V9H22V18ZM8 12H14V14H8V12ZM8 15H14V17H8V15Z"
                    />
                  </svg>
                  Project manager
                </router-link>

                <router-link
                  to="/kanban"
                  class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
                >
                  <svg
                    aria-hidden="true"
                    class="mr-2 w-[25px] h-[25px] fill-current"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 3H4C2.897 3 2 3.897 2 5V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V5C22 3.897 21.103 3 20 3ZM4 5H20V19H4V5ZM6 8H8V10H6V8ZM6 12H8V14H6V12ZM6 16H8V18H6V16ZM10 8H18V10H10V8ZM10 12H18V14H10V12ZM10 16H18V18H10V16Z"
                    />
                  </svg>
                  Kanban Board
                </router-link>

                <router-link
                  to="/profile"
                  class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
                >
                  <svg
                    aria-hidden="true"
                    class="mr-2 w-[25px] h-[25px] fill-current"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12.75C14.07 12.75 15.75 11.07 15.75 9C15.75 6.93 14.07 5.25 12 5.25C9.93 5.25 8.25 6.93 8.25 9C8.25 11.07 9.93 12.75 12 12.75ZM12 14.25C8.55 14.25 3 15.3 3 18.75V21H21V18.75C21 15.3 15.45 14.25 12 14.25Z"
                    />
                  </svg>
                  Profile
                </router-link>
                <router-link
                  to="/newProject"
                  class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
                >
                  <svg
                    aria-hidden="true"
                    class="mr-2 w-[25px] h-[25px] fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  New Project
                </router-link>
                <router-link
                  to="/statistique"
                  class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 15h4l3-10 3 16 4-12 3 8"
                    ></path>
                  </svg>
                  Statistique
                </router-link>
              </div>
              <div class="h-[50px]">
                <div>
                  <router-link
                    to="/setting"
                    class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
                  >
                    <svg
                      aria-hidden="true"
                      class="mr-2 w-[25px] h-[25px] fill-current"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Setting
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <!-- Main -->
      <div class="w-full h-full">
        <!-- header -->
        <div
          class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
        >
          <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="w-[25px] h-[25px]"
            >
              <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </div>
          <div class="w-[calc(100%-30px)] flex">
            <div class="w-[calc(100%-200px)] flex justify-center">
              <form class="flex items-center w-[500px]">
                <label for="voice-search" class="sr-only">Search</label>
                <div class="relative w-full">
                  <div
                    class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-auto text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="voice-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    required
                  />
                  <router-link
                    to="/"
                    class="flex absolute inset-y-0 right-0 items-center pr-3"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </router-link>
                </div>
              </form>
            </div>
            <div class="w-[200px]">
              <div
                class="flex items-center justify-start space-x-4"
                @click="toggleDrop"
              >
                <img
                  class="w-10 h-10 rounded-full border-2 border-gray-50"
                  src="https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg"
                  alt=""
                />
                <div class="font-semibold dark:text-gray-500 text-left">
                  <div>HI ! Wassim lahlali</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    Admin
                  </div>
                </div>
              </div>
              <div
                v-show="showDropDown"
                class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1 text-left" role="none">
                  <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    >Account settings</a
                  >
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                    >Support</a
                  >
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    >License</a
                  >
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 h-[calc(100%-50px)] p-[20px]">
          <div class="border rounded-md h-full p-[20px]">
            <router-view></router-view>
          </div>
        </div>
        <!-- Main body -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard-app",
  data() {
    return {
      showSideBar: true,
      showDropDown: false,
    };
  },
  created() {},
  methods: {
    closeIfClickedOutside() {
      this.showDropDown = false;
    },
    toggleSideBar() {
      this.showSideBar = !this.showSideBar;
    },
    toggleDrop() {
      this.showDropDown = !this.showDropDown;
    },
  },
};
</script>

<style>
.router-link-exact-active {
  @apply bg-gray-200 text-gray-800;
}
</style>
