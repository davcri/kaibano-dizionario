<template>
  <div>
    <svg
      class="search-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="22"
      height="22"
    >
      <path color="white" fill="none" d="M0 0h24v24H0z" />
      <path
        d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
      />
    </svg>

    <input
      id="query"
      type="text"
      v-model="dictionary.$state.searchQuery"
      placeholder="Cerca"
    />

    <svg
      class="clear-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      @click="clearInputForm"
      :class="{ clickable: dictionary.$state.searchQuery }"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        v-if="dictionary.$state.searchQuery"
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z"
      />
    </svg>
  </div>
</template>

<script>
import { appStore } from "../stores/app";
import { dictionaryStore } from "../stores/dictionary";

export default {
  setup() {
    return { dictionary: dictionaryStore(), app: appStore() };
  },
  mounted() {
    if (this.$route.query.q) {
      this.dictionary.$state.searchQuery = this.$route.query.q;
    }
  },
  methods: {
    clearInputForm() {
      this.dictionary.$state.searchQuery = "";
      this.app.$state.click.play();
    },
  },
  watch: {
    $route(to, from) {
      if (to.query.q) {
        this.dictionary.$state.searchQuery = to.query.q;
      }
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
  width: fit-content;
  max-width: 100%;

  border: solid rgba(0, 0, 0, 0) 1px;
  border-radius: var(--radius);
  background-color: rgba(255, 255, 255, 0.25);
}
svg {
  fill: var(--muted);
  margin: auto;
  min-width: 24px;
}
svg.search-icon {
  margin-left: 0.6em;
}
svg.clear-icon {
  position: absolute;
  right: 0px;
  margin-right: 0.6em;
  vertical-align: middle;
  height: 100%;
}
svg.clickable:hover {
  cursor: pointer;
  fill: var(--white);
}

input {
  font-size: 1.2em;
  flex: 1;
  padding: 0.5em;
  border: solid rgba(0, 0, 0, 0) 1px;
  background-color: rgba(0, 0, 0, 0);
  color: var(--white);
  font-family: "Majoris";
}

input:focus {
  outline: none;
  /* border: solid var(--accent) 1px; */
  /* box-shadow: var(--accent-semitransparent) 0px 0px 20px 1px; */
}
</style>
