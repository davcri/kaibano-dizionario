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
  <div class="box">
    <div class="row header">
      <h1>
        DIZIONARIO KAIBANO -
        <span style="color: rgba(255, 0, 0, 0.75)">ITA</span>
        <span style="color: rgba(255, 255, 255, 0.75)">LIA</span>
        <span style="color: rgba(0, 128, 0, 0.75)">NO</span>
      </h1>
      <Navigation id="nav"/>
    </div>
    <div class="row" :class="{ content: $route.name === 'Home' }">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style>
@import "./assets/base.css";

html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: black;
  background: linear-gradient(
    0deg,
    rgba(42, 0, 95, 1) 0%,
    rgba(42, 6, 95, 0.95) 50%,
    rgba(42, 0, 95, 1) 100%
  );
}

/* https://stackoverflow.com/questions/90178/make-a-div-fill-the-height-of-the-remaining-screen-space */
.box {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.box .row.header {
  flex: 0 1 auto;
}

.box .row.content {
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  overflow-y: auto;
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
  height: 100vh;
  margin: 0 auto;
  padding: 0.8rem;
  padding-top:1rem;
  padding-bottom: 0.4rem;
  font-weight: normal;
}

h1 {
  font-weight: 900;
  font-size: 1.8rem;
  line-height: 1em;
  user-select: none;
  margin-bottom: 0.5rem;
}

h1 span {
  font-weight: 900;
}

@media screen and (min-width: 480px) {
  #app {
    padding: 2rem;
  }

  #nav {
    margin-bottom: 1.5em;
  }
  
  h1 {
    font-size: 2.2rem;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>

<style scoped>
h1 {
  margin-top: 0.2rem;
}
</style>
