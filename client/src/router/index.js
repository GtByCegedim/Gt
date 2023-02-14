import { createRouter, createWebHistory } from "vue-router";
import dashboardApp from '../master/dashboard-app'
import home from '../pages/home'
import profile from '../pages/profile'
import employee from '../pages/employee'


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
        name: "profile",
        component: profile, 
        path: "/profile",
      },
      {
        name: "employee",
        component: employee, 
        path: "/employee",
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