<script setup>
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";
import { dictionaryStore } from "./stores/dictionary";
import { appStore } from "./stores/app";

const dict = dictionaryStore();
dict.init();
const app = appStore();
app.init();
</script>

<template>
  <h1>
    DIZIONARIO KAIBANO -
    <span style="color: rgba(255, 0, 0, 0.75)">ITA</span>
    <span style="color: rgba(255, 255, 255, 0.75)">LIA</span>
    <span style="color: rgba(0, 128, 0, 0.75)">NO</span>
  </h1>
  <Navigation style="margin-bottom: 2em" />
  <router-view />
  <Footer />
</template>

<style>
@import "./assets/base.css";

html,
body {
  height: 100%;
  background-color: black;
  background: linear-gradient(
    0deg,
    rgba(42, 0, 95, 1) 0%,
    rgba(42, 6, 95, 0.95) 50%,
    rgba(42, 0, 95, 1) 100%
  );
}

a {
  color: var(--violet);
}

a:visited {
  color: var(--link-muted);
}

a:hover {
  color: var(--violet-highlight);
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.8rem;
  font-weight: normal;
}

@media screen and (min-width: 480px) {
  #app {
    padding: 2rem;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

h1 {
  font-weight: 900;
}

h1 span {
  font-weight: 900;
}
</style>

<style scoped>
h1 {
  margin-top: 0.2em;
}
</style>
