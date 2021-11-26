<template>
  <div id="nav">
    <router-link to="/">Dizionario</router-link>
    <router-link to="/info">Info</router-link>
    <router-link to="/stats">Stats</router-link>
  </div>
</template>

<style scoped>
#nav a {
  text-decoration: unset;
  font-weight: 800;
  margin-right: 0.8em;
  margin-left: 0.2em;
}

#nav a.router-link-active {
  color: var(--violet);
  text-decoration: underline;
}
</style>
