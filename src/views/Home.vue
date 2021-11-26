<script setup>
import TermSearch from "../components/TermSearch.vue";
import Dictionary from "../components/Dictionary.vue";
</script>

<template>
  <main>
    <div class="container">
      <TermSearch />
      <Dictionary />
    </div>
  </main>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    onSearchQueryChanged(newQuery) {
      this.searchQuery = newQuery;
    },
  },
};
</script>

<style scoped>
div.container {
  /* border-width: 0.15em;
  border-color: var(--violet);
  border-radius: 0.5em;
  padding: 1em;
  border-style: solid;
  background-color: rgba(white, 0.2); */
  /* margin-bottom: 1em; */
}
</style>
