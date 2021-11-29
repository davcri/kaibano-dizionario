<template>
  <Table :words="filteredWords" />
</template>

<script>
import { dictionaryStore } from "../stores/dictionary";
import Table from "./Table.vue";

export default {
  setup() {
    return {
      dictionary: dictionaryStore(),
    };
  },
  mounted() {},
  computed: {
    filteredWords() {
      return this.dictionary.words.filter((w) => {
        const italianWord = w.Italiano.toLowerCase();
        const kaibanoWord = w.Kaibano.toLowerCase();
        const query = this.dictionary.$state.searchQuery.toLowerCase();
        return italianWord.includes(query) || kaibanoWord.includes(query);
      });
    },
  },
  data() {
    return {
      words: [],
    };
  },
  components: { Table },
};
</script>
