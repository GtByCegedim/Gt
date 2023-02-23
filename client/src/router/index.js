import { createRouter, createWebHistory } from "vue-router";
import dashAdmin from "../admin/master/dashboard.vue";
import statAdmin from "../admin/pages/statAdmin.vue";
import project from "../admin/pages/project.vue";
import home from "../user/master/homePage.vue";
import employe from "../admin/pages/employee.vue";
import newEmploye from "../admin/pages/newEmploye.vue";
import Login from "../master/Login.vue";
import allteams from "../admin/pages/allTeams.vue";
import dashEmploye from "../employe/master/dashEmploye.vue";
import store from "../store/store";

const routes = [
  {
    name: "home",
    component: home,
    path: "/",
  },
  {
    name: "Login",
    component: Login,
    meta: { requiresUnauth: true },
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
    ],
  },
  {
    name: "dashEmploye",
    component: dashEmploye,
    path: "/dashEmploye",
    meta: { requiresAuth: true },
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
    } else {
      next();
    }
  });

export default router;
