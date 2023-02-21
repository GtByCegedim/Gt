<template>
      <nav
      class="fixed z-20 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-none"
      style="background-color: #2c5681"
    >
      <div class="xl:container m-auto px-6 md:px-12">
        <div
          class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0"
        >
          <div class="w-full flex justify-between lg:w-auto"></div>
          <div
            class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0"
          >
            <div
              class="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l"
            >
              <a
                href="login"
                class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                style="color: white"
              >
                <span
                  class="relative text-sm font-semibold text-primary text-primaryLight"
                  >Login</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>