import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: () => import("../views/Upcoming.vue"),
  },
  {
    path: "/movie/:id",
    name: "Movie",
    component: () => import("../components/blog/Movie.vue"),
  },
  {
    path: "/people/:id",
    name: "People",
    component: () => import("../components/blog/People.vue"),
  },
  {
    path: "/*",
    component: () => import("../components/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
