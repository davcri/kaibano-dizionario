import { defineStore } from "pinia";
import dizionario from "../assets/dizionario.json";

type ParsedDictionaryEntry = {
  Kaibano: string,
  Italiano: string,
  "Aggiunto da": string,
  Nuovo: boolean
}
export type ParsedDictionary = ParsedDictionaryEntry[]

export const dictionaryStore = defineStore("dictionary", {
  state: () => ({
    searchQuery: "",
    words: [] as ParsedDictionary,
    contributors: {} as Record<string, number>,
  }),
  actions: {
    init() {
      // init words
      this.words = dizionario

      // init contributors
      this.words.forEach((el) => {
        const contributor = el["Aggiunto da"];
        if (contributor in this.contributors) {
          this.contributors[contributor] += 1;
        } else {
          this.contributors[contributor] = 1;
        }
      });
    },
    reset() {
      this.searchQuery = "";
    },
  },
  getters: {
    contributorsCount: (state) => {
      return Object.keys(state.contributors).length;
    },
  },
});
