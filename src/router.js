import Vue from "vue";
import Router from "vue-router";

//  Intro View
import Home from "@/views/Home.vue";
import Post from "@/views/Post.vue";
import Project from "@/views/Project.vue";
import About from "@/views/About.vue";
// import NotFound from "@/views/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: Home
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/post",
      name: "post",
      component: Post
    },
    {
      path: "/project",
      name: "project",
      component: Project
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
