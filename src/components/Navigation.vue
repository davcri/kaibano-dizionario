

<template>
  <div id="nav" class="flex">
    <router-link to="/" style="margin-left: 16px">Dizionario</router-link>
    <router-link to="/info">Info</router-link>
    <router-link to="/stats">Stats</router-link>
    <a
      href="https://docs.google.com/spreadsheets/d/16MXvgyvb-NFViSVvF7ZsNnkjDRzIvdi94DkZYuyWj9Y/edit?usp=sharing"
    >
      Migliora il dizionario
      <svg width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z"/><path d="M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z"/></svg>
    </a>
  </div>
</template>

<style scoped>
#nav {
  align-items: center;
}

#nav * {
  margin-bottom: 0.5em;
}

#nav a, #nav a * {
  text-decoration: unset;
  font-weight: 800;
  margin-right: 1em;
  margin-left: 0.2em;
  color: var(--violet-highlight-semitransparent);
}

#nav a svg {
  position: absolute;
  fill: var(--violet-highlight-semitransparent);
  /* top: -2px; */
}

#nav a:hover, #nav a:hover svg {
  color: var(--violet-highlight);
  fill: var(--violet-highlight);
}

#nav a.router-link-active {
  color: var(--violet);
  text-decoration: underline;
}
</style>
