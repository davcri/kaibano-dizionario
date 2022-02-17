<template>
  <Table :words="filteredWords" />
</template>

<script>
import { dictionaryStore } from "../stores/dictionary";
import Table from "./Table.vue";

export default {
  setup() {
    const dictionary = dictionaryStore()
    return {
      dictionary,
    };
  },
  computed: {
    filteredWords() {
      return this.dictionary.words.map(el =>{ return {
        Kaibano: el.Kaibano,
        Italiano: el.Italiano,
        AggiuntoDa: el["Aggiunto da"]
      }}).filter((w) => {
        const italianWord = w.Italiano.toLowerCase();
        const kaibanoWord = w.Kaibano.toLowerCase();
        const query = this.dictionary.$state.searchQuery.toLowerCase();
        return italianWord.includes(query) || kaibanoWord.includes(query);
      });
    },
  },
  components: { Table },
};
</script>
