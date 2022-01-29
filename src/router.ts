import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/pages/HomeComponent.vue";
import AboutComponent from "./components/pages/AboutComponent.vue";
import ServicesComponent from "./components/pages/ServicesComponent.vue";

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/about", component: AboutComponent },
  { path: "/services", component: ServicesComponent },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    //Return router to savedPosition
    if (savedPosition) {
      return savedPosition
    }
    //Return router to anchor tag (custom id element)
    if (to.hash) {
      return {
        el: to.hash
      }
    }
    //Return router to top.
    return { top: 0 }
  }
});

export default router;