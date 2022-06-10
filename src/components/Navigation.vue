<template>
  <div id="nav" class="flex f-wrap">
    <router-link to="/">Dizionario</router-link>
    <router-link to="/info">Info</router-link>
    <router-link to="/stats">Stats</router-link>
    <a
      href="https://docs.google.com/spreadsheets/d/16MXvgyvb-NFViSVvF7ZsNnkjDRzIvdi94DkZYuyWj9Y/edit?usp=sharing"
    >
      Migliora il dizionario
    </a>
  </div>
</template>

<style scoped>

#nav * {
  margin-bottom: .5em;
}

#nav a {
  text-decoration: unset;
  font-weight: 800;
  margin-right: 1em;
  margin-left: 0.2em;
  color: var(--violet-highlight-semitransparent);
}

#nav a:hover {
  color: var(--violet-highlight);
}

#nav a.router-link-active {
  color: var(--violet);
  text-decoration: underline;
}
</style>
