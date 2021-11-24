<template>
  <div class="words">
    Il dizionario contiene attualmente {{ wordsCount }} parole.
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
      wordsCount: 0,
    };
  },
  mounted() {
    const data = this.dictionary.parseDizionario();
    this.words = [...data.data];
    this.wordsCount = this.words.length;
  },
  computed: {
    filteredWords() {
      return this.words.filter((w) => {
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
