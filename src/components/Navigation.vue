<template>
  <div id="nav">
    <router-link to="/" @click="sound">Dizionario</router-link>
    <span style="border: 1px solid; opacity: 0.2; font-size: 0.7em"></span>
    <router-link to="/about" @click="sound">Info</router-link>
    <span style="border: 1px solid; opacity: 0.2; font-size: 0.7em"></span>
    <router-link to="/stats" @click="sound">Stats</router-link>
  </div>
</template>

<script>
import { appStore } from "../stores/app";

export default {
  methods: {
    sound() {
      const app = appStore();
      app.sfx.play();
    },
  },
};
</script>
<style scoped>
#nav a {
  text-decoration: unset;
  font-weight: 800;
  margin-right: 0.2em;
  margin-left: 0.2em;
}

#nav a.router-link-active {
  color: var(--violet);
  text-decoration: underline;
}
</style>
