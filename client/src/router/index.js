import { createRouter, createWebHistory } from "vue-router";
import dashboardApp from '../master/dashboard-app'
import dashboardAdmin from '../admin/master/dashboardAdmin'
import Myprojects from '../pages/project'
import profile from '../pages/profile'
import kanban from '../pages/kanban'
import employee from '../admin/pages/employee'
import home from '../admin/pages/home'
import profileAdmin from '../admin/pages/profile'
import AllProjects from '../admin/pages/project'




const routes = [
  {
    name: 'dashboard-app',
    component: dashboardApp,
    path: '/',
    children: [
            {
        name: "home",
        component: home, 
        path: "/home",
      },
      {
        name: "Myprojects",
        component: Myprojects, 
        path: "/Myprojects",
      },
      {
        name: "profile",
        component: profile, 
        path: "/profile",
      },
      {
        name: "kanban",
        component: kanban, 
        path: "/kanban",
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