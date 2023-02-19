import { createRouter, createWebHistory } from "vue-router";
import dashboardApp from '../master/dashboard-app'
import dashboardAdmin from '../admin/master/dashboardAdmin'
import Myprojects from '../pages/project'
import kanban from '../pages/kanban'
import Statistique from "../pages/statistique"
import employee from '../admin/pages/employee'
import home from '../admin/pages/home'
import profileAdmin from '../admin/pages/profile'
import AllProjects from '../admin/pages/project'
import Profile from '../pages/profile'
import newProject from '../pages/newProject'



const routes = [
  {
    name: 'dashboard-app',
    component: dashboardApp,
    path: '/',
    children: [
      
      {
        name: "Myprojects",
        component: Myprojects, 
        path: "/Myprojects",
      },
      {
        name: "Profile",
        component: Profile, 
        path: "/profile",
      },
      {
        name: "kanban",
        component: kanban, 
        path: "/kanban",
      },
      {
        name: "newProject",
        component: newProject, 
        path: "/newProject",
      },
      {
        name: "statistique",
        component: Statistique, 
        path: "/statistique",
      },
    ]
  },
  {
    name: 'dashboardAdmin-app',
    component: dashboardAdmin,
    path: '/admin',
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
      
    ]
  }
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