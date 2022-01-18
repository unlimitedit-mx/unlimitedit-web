import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/about", component: AboutComponent },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;