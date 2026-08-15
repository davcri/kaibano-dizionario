<template>
  <div id="nav">
    <router-link to="/">
      <button>Dizionario</button>
    </router-link>
    <router-link to="/info">
      <button>Info</button>
    </router-link>
    <router-link to="/stats">
      <button>Stats</button>
    </router-link>
    <a
      href="https://docs.google.com/spreadsheets/d/16MXvgyvb-NFViSVvF7ZsNnkjDRzIvdi94DkZYuyWj9Y/edit?usp=sharing"
    >
      <button>
          Contribuisci 
        <svg
          width="14px"
          viewBox="0 0 24 24"
          xmlns="http:/www.w3.org/2000/svg"
        >
          <path
            d="M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z"
          />
          <path
            d="M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z"
          />
        </svg>
      </button>
    </a>
  </div>
</template>

<style scoped>
#nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 24px;
  row-gap: 16px;
  margin-bottom: 1.5em;
}

#nav button {
  border: 1px solid var(--violet-highlight-semitransparent);
  background-color: var(--dark);
  min-width: 120px;
  text-align: center;
  min-height: 30px;
}

#nav div * {
  vertical-align: middle;
  justify-content: center;
}

#nav a,
#nav a * {
  text-decoration: unset;
  font-weight: 800;
  color: var(--violet-highlight-semitransparent);
}

#nav a svg {
  /* position: absolute; */
  fill: var(--violet-highlight-semitransparent);
  top: 2px;
}

#nav a:hover,
#nav a:hover svg {
  color: var(--violet-highlight);
  fill: var(--violet-highlight);
}

#nav a.router-link-active button {
  color: var(--violet);
  text-decoration: underline;
}
</style>
