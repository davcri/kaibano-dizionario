<template>
  <div id="nav">
    <router-link to="/">Dizionario</router-link>
    <span style="border: 1px solid; opacity: 0.2; font-size: 0.7em"></span>
    <router-link to="/about">Info</router-link>
    <span style="border: 1px solid; opacity: 0.2; font-size: 0.7em"></span>
    <router-link to="/stats">Stats</router-link>
  </div>
</template>

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
