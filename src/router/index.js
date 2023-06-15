import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/BlogView"),
  },
  {
    path: "/blog/:id",
    name: "post",
    component: () => import("../views/PostView"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
