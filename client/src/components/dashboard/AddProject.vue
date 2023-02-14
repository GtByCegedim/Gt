<template>
  <div>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1"></div>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST">
          <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label
                    for="company-website"
                    class="block text-sm font-medium text-gray-700"
                    >Project name</label
                  >
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <span
                      class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
                      >http://</span
                    >
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  for="about"
                  class="block text-sm font-medium text-gray-700"
                  >Description</label
                >
                <div class="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Brief description for your project. URLs are hyperlinked.
                </p>
              </div>

              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label
                    for="company-website"
                    class="block text-sm font-medium text-gray-700"
                    >Project Manager</label
                  >
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <span
                      class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
                      >http://</span
                    >
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>
</template>
