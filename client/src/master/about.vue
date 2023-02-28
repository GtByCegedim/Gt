<template>
  <dir class="m-0 h-full w-full bg-gray-700 font-sans">
    <input
      type="checkbox"
      name="hbr"
      id="hbr"
      class="hbr peer"
      hidden
      aria-hidden="true"
    />
    <nav
      class="navbar peer-checked:navbar-active fixed z-20 w-full bg-white/80 shadow-md shadow-gray-600/5 backdrop-blur dark:bg-gray-900/80 dark:shadow-none md:relative md:bg-transparent"
    >
      <div class="m-auto px-6 xl:container md:px-12">
        <div
          class="flex flex-wrap items-center justify-between gap-6 md:gap-0 md:py-3"
        >
          <div class="flex w-full justify-between lg:w-auto">
            <a href="#" aria-label="logo" class="flex items-center space-x-2">
              <div aria-hidden="true" class="flex space-x-1">
                <div class="bg-primary dark:bg-primaryLight h-6 w-2"></div>
              </div>
              GT
            </a>
            <label
              for="hbr"
              class="peer-checked:hamburger relative z-20 -mr-6 block cursor-pointer p-6 lg:hidden"
            >
              <div
                aria-hidden="true"
                class="m-auto h-0.5 w-6 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"
              ></div>
              <div
                aria-hidden="true"
                class="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"
              ></div>
            </label>
          </div>
          <div
            class="navmenu mb-16 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-300/20 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none md:flex-nowrap lg:m-0 lg:flex lg:w-7/12 lg:space-y-0 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
          >
            <div
              class="border-primary/10 -ml-1 flex w-full flex-col space-y-2 dark:border-gray-700 sm:flex-row md:w-max lg:space-y-0 lg:border-l"
            >
              <a
                href="#"
                class="before:bg-primary dark:before:bg-primaryLight relative ml-auto flex h-9 items-center justify-center before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:px-6"
              >
                <span
                  class="relative text-sm font-semibold text-white dark:text-gray-100"
                  >Login</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="m-auto pt-32 xl:container md:py-12 md:px-12">
      <div
        aria-hidden="true"
        class="from-primaryLight to-secondaryLight absolute inset-0 my-auto h-32 w-96 rotate-45 bg-gradient-to-r opacity-50 blur-3xl dark:opacity-20"
      ></div>
      <div class="relative lg:flex lg:items-center lg:gap-12">
        <div
          class="text-center sm:mx-auto sm:w-10/12 md:mt-12 md:w-2/3 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left"
        >
          <h1
            class="text-4xl font-bold text-gray-900 dark:text-white md:text-6xl lg:text-5xl xl:text-6xl"
          >
            <span class="text-primary dark:text-primaryLight text-green-400"
              >G</span
            >estionnaire de
            <span class="text-primary dark:text-primaryLight text-indigo-400"
              >T</span
            >âches Simplifié
            <span class="text-primary dark:text-primaryLight text-green-400"
              >G<span
                class="text-primary dark:text-primaryLight text-indigo-400"
                >T</span
              ></span
            >
          </h1>
          <p class="mt-8 text-gray-600 dark:text-gray-300">
            GT est une application de gestion de tâches simple et intuitive
            conçue pour vous aider à rester organisé et productif. Avec GT, vous
            pouvez facilement créer des listes de tâches, définir des priorités
            et des dates d'échéance, et suivre votre progression tout au long de
            la journée. Que vous soyez un étudiant qui cherche à organiser ses
            études, un professionnel qui veut gérer son temps efficacement, ou
            simplement quelqu'un qui veut être plus productif au quotidien, GT
            est l'application idéale pour vous aider à accomplir vos tâches et
            atteindre vos objectifs. Téléchargez GT dès aujourd'hui et commencez
            à gérer vos tâches de manière plus simple et plus efficace que
            jamais auparavant!
          </p>
          <div>
            <form action="" class="mt-12 w-full"></form>
          </div>
        </div>
        <div class="marg lg:-mr-15 mb-4 w-full overflow-hidden lg:w-7/12">
          <img
            src="./icons/gt.svg"
            alt="project illustration"
            height=""
            width=""
          />
        </div>
      </div>
    </div>

    <div class="py-12">
      <div class="m-auto px-6 text-gray-600 xl:container md:px-12 xl:px-6">
        <div class="mb-12 space-y-2 text-center">
          <h2
            class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl"
          >
            Que vous pouvez faire ?
          </h2>
          <p class="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12">
            Selon votre role , Vous bénificier de beaucoup d'actions grace à
            <span class="text-green-400">G</span
            ><span class="text-indigo-400">T</span> , Vous pouvez :
          </p>
        </div>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            class="group rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-6 shadow-2xl shadow-gray-600/10 dark:border-gray-100 dark:bg-gray-100 dark:shadow-none sm:p-8"
          >
            <div class="relative bg-white overflow-hidden rounded-xl">
              <img
                src="./images/stat.png"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div class="relative mt-6">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-900">
                Gerez des Employés
              </h3>
              <p class="mt-6 mb-8 text-gray-600 dark:text-gray-900">
                Si vous etes Admin , vous pouvez ajouter et suivre l'avencement
                d'employés
              </p>
              <a class="inline-block" href="#">
                <span class="text-primary">Read more</span>
              </a>
            </div>
          </div>
          <div
            class="group rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-6 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-100 dark:shadow-none sm:p-8"
          >
            <div class="relative overflow-hidden rounded-xl">
              <img
                src="./images/projet.png"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div class="relative mt-6">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-900">
                Creer des Projets
              </h3>
              <p class="mt-6 mb-8 text-gray-600 dark:text-gray-900">
                Acceder à GT comme un employé et créer votre propre project
              </p>
              <a class="inline-block" href="#">
                <span class="text-primary">Read more</span>
              </a>
            </div>
          </div>
          <div
            class="group rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-6 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-100 dark:shadow-none sm:p-8"
          >
            <div class="relative overflow-hidden rounded-xl">
              <img
                src="./images/task.png"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div class="relative mt-6">
              <h3 class="text-2xl font-semibold text-gray-100 dark:text-gray-900">
                Créer des taches
              </h3>
              <p class="mt-6 mb-8 text-gray-600 dark:text-gray-900">
                Vous avez créer un projet , une équipe , donc creer des taches
                et démarer l'aventure
              </p>
              <a class="inline-block" href="#">
                <span class="text-primary">Read more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="mt w-full bg-gray-800 py-16 dark:bg-gray-800">
      <div class="md:px-12 lg:px-28">
        <div
          class="container m-auto space-y-6 text-gray-600 dark:text-gray-300"
        >
          <img src="./icons/gt.svg" alt="logo tailus" class="m-auto w-40" />
          <ul
            role="list"
            class="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
          >
            <li role="listitem">
              <a href="#" class="hover:text-primary">Home</a>
            </li>

            <li role="listitem">
              <a href="#" class="hover:text-primary">Get started</a>
            </li>
            <li role="listitem">
              <a href="#" class="hover:text-primary">About us</a>
            </li>
          </ul>

          <div class="text-center">
            <span class="text-sm tracking-wide"
              >CEGEDIM © YOUCODE <span id="year"></span> |
              <span class="text-green-400"
                >BROO<span class="text-indigo-400">GRAMMERS</span></span
              >
            </span>
          </div>
        </div>
      </div>
    </footer>
  </dir>
</template>
<style>
.marg {
  margin-top: -10%;
}
.mt {
  margin-top: 5%;
}
</style>
