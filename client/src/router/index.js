import { createRouter, createWebHistory } from "vue-router";
import dashAdmin from "../admin/master/dashboard.vue";
import profileAdmin from "../admin/pages/profile.vue";
import statAdmin from "../admin/pages/statAdmin.vue";
import project from "../admin/pages/project.vue";
import home from "../user/master/homePage.vue";
import employe from "../admin/pages/employee.vue";
import newEmploye from "../admin/pages/newEmploye.vue";
import Login from "../master/Login.vue";
import allteams from "../admin/pages/allTeams.vue";
import dashEmploye from "../employe/master/dashEmploye.vue";
import store from "../store/store";
import employeOfTeam from "../admin/pages/employeeOfTeam.vue";
import newTeam from "../employe/pages/newTeam.vue";
import addMember from "../employe/pages/addMember.vue";
import projetDetails from "../admin/pages/projectDetails.vue";

import projectEmploye from "../employe/pages/project.vue";
import infoProjet from "../employe/pages/infoProject.vue";
import statEmploye from "../employe/pages/statEmploye.vue";
import kanban from "../employe/pages/kanban.vue";
import profile from "../employe/pages/profile.vue";
import newProjet from "../employe/pages/newProject.vue";
import teams from "../employe/pages/Teams.vue";

const routes = [
  {
    name: "home",
    component: home,
    path: "/",
  },
  {
    name: "Login",
    component: Login,
    path: "/Login",
  },
  {
    name: "dashAdmin",
    component: dashAdmin,
    path: "/dashAdmin",
    meta: { requiresAuth: true, userRole: "admin" },
    children: [
      {
        name: "statAdmin",
        component: statAdmin,
        path: "statistiques",
      },
      {
        name: "project",
        component: project,
        path: "project",
      },
      {
        name: "projetDetails",
        component: projetDetails,
        path: "projetDetails/:projectId",
      },

      {
        name: "employe",
        component: employe,
        path: "employe",
      },
      {
        name: "newEmploye",
        component: newEmploye,
        path: "newEmploye",
      },
      {
        name: "allteams",
        component: allteams,
        path: "allteams",
      },
      {
        name: "employeOfTeam",
        component: employeOfTeam,
        path: "employeOfTeam",
      },
      {
        name: "profileAdmin",
        component: profileAdmin,
        path: "profile",
      },
    ],
  },
  {
    name: "dashEmploye",
    component: dashEmploye,
    path: "/dashEmploye",
    meta: { requiresAuth: true, userRole: "employe" },
    children: [
      {
        name: "projectEmploye",
        component: projectEmploye,
        path: "project",
      },
      {
        name: "infoProjet",
        component: infoProjet,
        path: "infoProjet",
      },
      {
        name: "statEmploye",
        component: statEmploye,
        path: "statistique",
      },
      {
        name: "kanban",
        component: kanban,
        path: "kanban",
      },
      {
        name: "profile",
        component: profile,
        path: "profile",
      },
      {
        name: "newProjet",
        component: newProjet,
        path: "creerProjet",
      },
      {
        name: "teams",
        component: teams,
        path: "teams",
      },
      {
        name: "newTeam",
        component: newTeam,
        path: "newTeam",
      },
      {
        name: "addMember",
        component: addMember,
        path: "addMember",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = store.state.token;
  const user = store.state.user;

  if (to.meta.requiresAuth && !token) {
    next({ name: "Login" });
  } else if (to.meta.requiresUnauth && token) {
    next({ name: "dashAdmin" });
  } else if (to.name === "Login" && token) {
    next({ name: "dashAdmin" });
  } else if (to.meta.role && user && user.role !== to.meta.role) {
    next({ name: user.role === "admin" ? "dashAdmin" : "dashEmploye" });
  } else {
    next();
  }
});

export default router;
