<template>
  <header>
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
  </header>
  <div class="pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
    <div
      aria-hidden="true"
      class="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"
    ></div>
    <div class="relative lg:flex lg:items-center lg:gap-12">
      <div
        class="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12"
      >
        <h1
          class="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white"
        >
          Bienvenue sur
          <span class="text-primary dark:text-primaryLight"
            >GT by Cegedim.</span
          >
        </h1>
        <p class="mt-8 text-gray-600 dark:text-gray-300">
          Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas
          doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum
          soluta!<br/>
          Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas
          doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum
          soluta!<br/>
          Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas
          doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum
          soluta!<br/>
          Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas
          doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum
          soluta!<br/>
          Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas
          doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum
          soluta!
        </p>
        <div
          class="mt-12 flex gap-6 lg:gap-12 justify-between"
        >
        <img
          src="../assets/download.png"
          class="h-8 sm:h-10 w-auto lg:h-12"
          alt=""
        />
        <img
        src="../assets/logo-nav.png"
        class="h-8 sm:h-10 w-auto lg:h-12"
        alt=""
        />
        <img
          src="../assets/gtlogo-removebg-preview.png"
          class="h-8 sm:h-10 w-auto lg:h-12"
          alt=""
        />
          <img
            src="../assets/youcode.png"
            class="h-8 sm:h-10 w-auto lg:h-12"
            style="background-color: gray;"
            alt=""
          />
        </div>
      </div>
      <div class="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
        <img
          src="../assets/screencapture-localhost-8081-newProject-2023-02-19-02_19_38.png
          "
          alt="project illustration"
          height=""
          width=""
        />
      </div>
    </div>
  </div>
</template>

<style>
/* @layer components {
  .navbar-active .hamburger div:first-child {
    @apply rotate-45 translate-y-1.5;
  }
  .navbar-active .hamburger div:last-child {
    @apply -rotate-45 -translate-y-1;
  }
  .navbar-active div:first-child div:first-child div:last-child {
    @apply block lg:flex;
  }
} */
</style>
