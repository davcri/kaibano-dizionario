import { defineStore } from "pinia";
import { dizionario } from "../assets/dizionario.csv";
import Papa from "papaparse";

export const dictionaryStore = defineStore("dictionary", {
  state: () => ({
    searchQuery: "",
    words: [],
  }),
  actions: {
    init() {
      let data = this.parseDizionario();
      data = data.data;
      data.map((el) => {
        delete el["Revisionato da"];
        this.words.push(el);
      });
      // this.words = [...data.data];
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
