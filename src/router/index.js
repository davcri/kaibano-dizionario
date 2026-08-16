import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import { appStore, playSfx } from "../stores/app";
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
      path: "/info",
      name: "Info",
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

const initialClickedLinks = Number(JSON.parse(localStorage.getItem("stats")).clickedInternalLinks) ?? 0

router.beforeEach((to, from, next) => {
  const app = appStore();
  app.$state.clickedInternalLinks += 1;
  const isInitialLoading = app.$state.clickedInternalLinks === initialClickedLinks;
  console.log(app.$state.clickedInternalLinks, initialClickedLinks)
  if (!isInitialLoading) {
    playSfx('sfx')
  }

  next();
});

export default router;
