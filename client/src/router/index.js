import { createRouter, createWebHistory } from "vue-router";
import dashAdmin from "../admin/master/dashboard.vue";
import profileAdmin from "../admin/pages/profile.vue"
import statAdmin from "../admin/pages/statAdmin.vue";
import project from "../admin/pages/project.vue";
import home from "../user/master/homePage.vue";
import employe from "../admin/pages/employee.vue";
import newEmploye from "../admin/pages/newEmploye.vue";
import Login from "../master/Login.vue";
import allteams from "../admin/pages/allTeams.vue";
import dashEmploye from "../employe/master/dashEmploye.vue";
import store from "../store/store";
import employeOfTeam from '../admin/pages/employeeOfTeam.vue'

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
    meta: { requiresUnauth: true, role: "admin" },
    path: "/Login",
  },
  {
    name: "dashAdmin",
    component: dashAdmin,
    path: "/dashAdmin",
    meta: { requiresAuth: true },
    children: [
      {
        name: "statAdmin",
        component: statAdmin,
        path: "statAdmin",
      },
      {
        name: "project",
        component: project,
        path: "project",
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
    meta: { requiresAuth: true, role: "employe" },
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.token) {
    next({ name: "Login" });
  } else if (to.meta.requiresUnauth && store.state.token) {
    next({ name: "dashAdmin" });
  } else if (to.name === "Login" && store.state.token) {
    next({ name: "dashAdmin" });
  } else if (to.meta.role && store.state.user.role !== to.meta.role) {
    // <-- add role check
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
