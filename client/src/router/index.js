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
import addProfile  from "../employe/pages/createProfile.vue"
import addTask from "../employe/pages/addTask.vue"
import infoOneTeam from "../admin/pages/infoOneTeams.vue"
import projectEmploye from "../employe/pages/project.vue";
import infoProjet from "../employe/pages/infoProject.vue";
import statEmploye from "../employe/pages/statEmploye.vue";
import kanban from "../employe/pages/kanban.vue";
import profile from "../employe/pages/profile.vue";
import newProjet from "../employe/pages/newProject.vue";
import teams from "../employe/pages/Teams.vue";
import resetPassword from "../master/resetPassword.vue"
import NotFound from "../master/error404.vue"
import about from "../master/about.vue"
import infosEmploye from "../admin/pages/employeeOfTeam.vue"
import attTaskFromE from "../employe/pages/addTaskFromHome.vue"
import descriptionTask from "../employe/components/DescriptionTask.vue"
import TacheReutulisable from "../employe/pages/TacheReutulisable.vue"

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
    path: '/:catchAll(.*)', // ce chemin intercepte toutes les URL qui ne correspondent à aucune autre route
    name: 'NotFound',
    component: NotFound,
  },
  {
    name: "resetPassword",
    component: resetPassword,
    path: "/resetPassword",
  },
  {
    name: "about",
    component: about,
    path: "/about",
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
        props: true,
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
        name: "team",
        component: infoOneTeam,
        path: "team/:id",
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
      {
        name: "infosEmploye",
        component: infosEmploye,
        path: "infos/:id",
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
        path: "infoProjet/:projectId",
      },
      {
        name: "statEmploye",
        component: statEmploye,
        path: "statistique",
      },
      {
        name: "kanban",
        component: kanban,
        path: "kanban/:projectId",
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
        path: "newTeam/:id",
      },
      {
        name: "addMember",
        component: addMember,
        path: "addMember/:id",
      },
      {
        name: "addProfile",
        component: addProfile,
        path: "addProfile",
      },
      {
        name: "addTask",
        component: addTask,
        path: "addTask/:id",
      },
      {
        name: "attTaskFromE",
        component: attTaskFromE,
        path: "addTask",
      },
      {
        name: "descriptionTask",
        component: descriptionTask,
        path: "infoTask/:taskId",
      },
      {
        name: "TacheReutulisable",
        component: TacheReutulisable,
        path: "taches",
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
