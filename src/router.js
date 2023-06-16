import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "./pages/AboutPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import ContactPage from "./pages/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AboutMe,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsPage,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
    {
        path: "/project/:slug",
        name: "single-project",
        component: ProjectPage,
    },
  ]
});

export { router };