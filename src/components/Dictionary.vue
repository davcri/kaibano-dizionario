<template>
  <div class="words">
    <Table
      :headers="['Kaibano', '	🇮🇹 Italiano', 'Aggiunto da']"
      :words="filteredWords"
    />
    <!-- {{ sheets.$state.name }} -->
  </div>
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
  mounted() {
    // const data = this.dictionary.parseDizionario();
    // this.words = [...this.dictionary.words];
  },
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
