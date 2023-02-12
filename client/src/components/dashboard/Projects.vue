<script>
import VTooltip from "v-tooltip";

export default {
  name: "ProjectInformation",
  directives: {
    tooltip: VTooltip.directive,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Project 1",
          creator: "John Doe",
          members: "Jane Doe, Bob Smith",
        },
        {
          id: 2,
          name: "Project 2",
          creator: "Jane Doe",
          members: "John Doe, Bob Smith",
        },
        {
          id: 3,
          name: "Project 3",
          creator: "Bob Smith",
          members: "John Doe, Jane Doe",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="flex-1 p-6">
    <h2 class="text-2xl font-bold mb-4">List of Projects</h2>
    <div class="p-6">
      <table class="w-full text-left table-collapse">
        <thead>
          <tr>
            <th class="text-sm font-medium p-2 bg-gray-100 text-gray-600">
              Project Number
            </th>
            <th class="text-sm font-medium p-2 bg-gray-100 text-gray-600">
              Project Name
            </th>
            <th class="text-sm font-medium p-2 bg-gray-100 text-gray-600">
              Creator
            </th>
            <th class="text-sm font-medium p-2 bg-gray-100 text-gray-600">
              Members
            </th>
            <th class="text-sm font-medium p-2 bg-gray-100 text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(project, index) in projects" :key="project.id">
            <td class="p-2 border-t">{{ index + 1 }}</td>
            <td class="p-2 border-t">
              <a class="text-blue-500 hover:text-blue-600" href="#">{{
                project.name
              }}</a>
            </td>
            <td class="p-2 border-t">
              <div class="bg-green-500 text-white p-2 rounded inline-block">
                {{ project.creator }}
              </div>
            </td>
            <td class="p-2 border-t">
              <template v-for="member in project.members.split(', ')">
                <div
                  class="bg-gray-300 text-gray-700 rounded-full inline-block p-2 hover:bg-gray-400"
                  v-tooltip="member"
                >
                  {{
                    member.split(" ")[0].charAt(0) +
                    member.split(" ")[1].charAt(0)
                  }}
                </div>
              </template>
              <div
                class="bg-gray-300 text-gray-700 rounded-full inline-block p-2 hover:bg-gray-400"
                v-tooltip="'Add Member'"
              >
                <i class="fas fa-plus"></i>
              </div>
            </td>
            <td class="p-2 border-t">
              <button
                class="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
              >
                Update
              </button>
              <button
                class="bg-red-500 text-white p-2 rounded hover:bg-red-600 ml-2"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-6">
      <div class="float-right">
        <button
          class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white p-2 rounded"
        >
          Add New
        </button>
      </div>
    </div>
  </div>
</template>
