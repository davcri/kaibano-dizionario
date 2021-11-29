<script setup>
import TermSearch from "../components/TermSearch.vue";
import Dictionary from "../components/Dictionary.vue";
</script>

<template>
  <TermSearch />
  <Dictionary />
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

<style scoped></style>
