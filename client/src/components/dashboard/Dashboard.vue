<template>
  <div class="flex h-full w-full">
    <!-- Sidebar -->
    <div class="w-64 bg-gray-700 text-gray-100 flex flex-col justify-between">
      <div class="p-4">
        <div class="text-2xl font-bold my-8">GT by cegedim-srh</div>
        <div class="flex items-center space-x-4 mb-4 mt-6">
          <img
            class="h-12 w-12 rounded-full object-cover"
            src="../../assets/gt.svg"
            alt="user avatar"
          />
          <div>
            <div class="text-lg font-bold white-space: nowrap">John doe</div>
            <div class="text-sm font-medium mb-1">Developer</div>
          </div>
        </div>

        <nav class="flex-1">
          <ul class="space-y-14 mt-20">
            <li>
              <router-link
                to="/"
                class="flex items-center py-2 px-4 hover:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span class="text-lg">Kanban Board</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/project-manager"
                class="flex items-center py-2 px-4 hover:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span class="text-lg">Project Manager</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/create-project"
                class="flex items-center py-2 px-4 hover:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span class="text-lg">Create Project</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>
