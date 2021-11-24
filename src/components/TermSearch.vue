<template>
  <input
    type="text"
    v-model="dictionary.$state.searchQuery"
    placeholder="Cerca"
  />
</template>

<script>
import { dictionaryStore } from "../stores/dictionary";

export default {
  setup() {
    return { dictionary: dictionaryStore() };
  },
  mounted() {
    if (this.$route.query.q) {
      this.dictionary.$state.searchQuery = this.$route.query.q;
    }
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

<style>
input {
  border: none;
  background-color: rgba(255, 255, 255, 0.25);
  font-size: 1.2em;
  padding: 0.3em;
  color: var(--white);
  font-family: "Majoris";
}
</style>
