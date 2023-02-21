import { createRouter, createWebHistory } from "vue-router"
import dashboardApp from '../employe/master/dashboard-app'
import dashboardAdmin from '../admin/master/dashboardAdmin'
import Myprojects from '../employe/pages/project'
import kanban from '../employe/pages/kanban'
import Statistique from "../employe/pages/statistique"
import employee from '../admin/pages/employee'
import home from '../admin/pages/home'
import profileAdmin from '../admin/pages/profile'
import AllProjects from '../admin/pages/project'
import Profile from '../employe/pages/profile'
import newProject from '../employe/pages/newProject'
import homePage from '../user/master/homePage'
import infoProject from '../employe/pages/infoProject'
import myProject from '../employe/pages/myProjects'
import newEmploye from '../admin/pages/newEmploye'
import allTeams from '../admin/pages/allTeams.vue'
import infoOneTeams from '../admin/pages/infoOneTeams'
import login from '@/user/master/login'


const routes = [
  {
    name : 'homePage',
    component: homePage,
    path : '/'
  },
  {
    name : 'login',
    component: login,
    path : '/login'
  },
  {
    name: 'dashboard-app',
    component: dashboardApp,
    path: '/employe',
    children: [
      {
        name: "Myprojects",
        component: Myprojects,
        path: "Myprojects",
      },
      {
        name: "Profile",
        component: Profile,
        path: "profile",
      },
      {
        name: "kanban",
        component: kanban,
        path: "kanban",
      },
      {
        name: "Statistique",
        component: Statistique,
        path: "statistique",
      },
      {
        name: "newProject",
        component: newProject,
        path: "newProject",
      },
      {
        name: "infoProject",
        component: infoProject,
        path: "infoProject",
      },
      {
        name: "myProject",
        component: myProject,
        path: "myProject",
      },
 
    ],
  },
  {
    name: "dashboardAdmin-app",
    component: dashboardAdmin,
    path: "/admin",
    children: [
      {
        name: "statistique",
        component: home,
        path: "home",
      },
      {
        name: "profile",
        component: profileAdmin,
        path: "profile",
      },
      {
        name: "employee",
        component: employee,
        path: "employee",
      },
      {
        name: "allProjects",
        component: AllProjects,
        path: "projects",
      },
      {
        name: "newEmploye",
        component: newEmploye,
        path: "newEmploye",
      },
      {
        name: "allTeams",
        component: allTeams,
        path: "allTeams",
      },
      {
        name: "infoOneTeams",
        component: infoOneTeams,
        path: "infoOneTeams",
      },
    ],
  },
];
const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}
