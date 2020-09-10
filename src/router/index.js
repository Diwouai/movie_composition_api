import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Upcoming from "../views/Upcoming.vue";
import Movie from "../components/blog/Movie.vue";
import People from "../components/blog/People.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: Upcoming
  },
  {
    path: "/movie/:id",
    name: "Movie",
    component: Movie
  },
  {
    path: "/people/:id",
    name: "People",
    component: People
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
