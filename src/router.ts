import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/pages/HomeComponent.vue";
import AboutComponent from "./components/pages/AboutComponent.vue";

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/about", component: AboutComponent },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});

export default router;