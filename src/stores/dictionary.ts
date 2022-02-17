import { defineStore } from "pinia";
import { dizionario } from "../assets/dizionario.csv";
import Papa from "papaparse";

export const dictionaryStore = defineStore("dictionary", {
  state: () => ({
    searchQuery: "",
    words: [],
    contributors: {},
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

      dict.data.forEach((el) => {
        const contributor = el["Aggiunto da"];
        if (contributor in this.contributors) {
          this.contributors[contributor] += 1;
        } else {
          this.contributors[contributor] = 1;
        }
      });
      return dict;
    },
  },
  getters: {
    contributorsCount: (state) => {
      return Object.keys(state.contributors).length;
    },
  },
});
