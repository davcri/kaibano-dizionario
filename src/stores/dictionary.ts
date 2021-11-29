import { defineStore } from "pinia";
import { dizionario } from "../assets/dizionario.csv";
import Papa from "papaparse";

export const dictionaryStore = defineStore("dictionary", {
  state: () => ({
    searchQuery: "",
    words: [],
    contributorsCount: 1,
  }),
  actions: {
    init() {
      const parsed = this.parseDizionario();
      parsed.data.map((el) => {
        delete el["Revisionato da"];
        this.words.push(el);
      });
    },
    reset() {
      this.searchQuery = "";
    },
    parseDizionario() {
      const dict = Papa.parse(dizionario, {
        // https://www.papaparse.com/docs#config
        header: true,
      });
      return dict;
    },
  },
});
