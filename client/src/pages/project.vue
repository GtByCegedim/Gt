<template>
  <div class="flex flex-col">
    <h1 class="text-2xl font-bold mb-4">Projects</h1>
    <div class="overflow-x-auto">
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">Project ID</th>
            <th class="px-4 py-2">Project Name</th>
            <th class="px-4 py-2">Project Manager</th>
            <th class="px-4 py-2">Project Members</th>
            <th class="px-4 py-2">Created At</th>
            <th class="px-4 py-2">Deadline</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="projects.length === 0">
            <td class="border px-4 py-2" colspan="7">No projects found.</td>
          </tr>
          <tr v-else v-for="project in projects" :key="project.id">
            <td class="border px-4 py-2">{{ project.id }}</td>
            <td class="border px-4 py-2">{{ project.name }}</td>
            <td class="border px-4 py-2">{{ project.projectManager }}</td>
            <td class="border px-4 py-2">
              <div class="flex items-center">
                <div
                  v-for="member in project.members"
                  :key="member"
                  class="bg-gray-500 rounded-full w-8 h-8 flex items-center justify-center text-white mr-2"
                >
                  {{ member[0] }}{{ member[member.lastIndexOf(" ") + 1] }}
                </div>
              </div>
            </td>
            <td class="border px-4 py-2">{{ project.createdAt }}</td>
            <td class="border px-4 py-2">{{ project.deadline }}</td>
            <td class="border px-4 py-2">
              <div class="flex items-center">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  @click="editProject(project.id)"
                >
                  Edit
                </button>
                <button
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  @click="deleteProject(project.id)"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
       projects : [
  {
    id: 1,
    name: 'Project A',
    projectManager: 'John Smith',
    members: ['Alice Adams', 'Bob Brown', 'Charlie Chang'],
    createdAt: '2022-01-01',
    deadline: '2022-02-01'
  },
  {
    id: 2,
    name: 'Project B',
    projectManager: 'Jane Doe',
    members: ['David Davis', 'Eve Evans'],
    createdAt: '2022-01-15',
    deadline: '2022-03-01'
  },
  {
    id: 3,
    name: 'Project C',
    projectManager: 'Jack Johnson',
    members: ['Frank Franklin'],
    createdAt: '2022-02-01',
    deadline: '2022-04-01'
  }
]

    }
  }
}
</script>