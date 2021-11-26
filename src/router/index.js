import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import { appStore } from "../stores/app";
import Stats from "../views/Stats.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/stats",
      name: "Stats",
      component: Stats,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  const app = appStore();
  app.$state.clickedInternalLinks += 1;
  if (app.$state.clickedInternalLinks === 0) {
    // initial load
    next();
  } else {
    const app = appStore();
    app.sfx.play();
    next();
  }
});

export default router;
