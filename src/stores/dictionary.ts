import { defineStore } from "pinia";
import { dizionario } from "../assets/dizionario.csv";
import Papa from "papaparse";

type ParsedDictionaryEntry = {
  Kaibano: string,
  Italiano: string,
  "Aggiunto da": string,
  "Revisionato da"?: string,
  Fonte: string,
  Nuovo: string
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
      this.words = this.parseDizionario()

      // init contribuots
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
    parseDizionario(): ParsedDictionary {
      const dict = Papa.parse(dizionario, {
        // https://www.papaparse.com/docs#config
        header: true,
      });

      const newDict: ParsedDictionary = []
        const words = dict.data as ParsedDictionary
        words.forEach((element,idx) => {
          // delete (element as any)[`""`]
          newDict[idx] = element
        })
      console.log(newDict)
      return newDict as ParsedDictionary;
    },
  },
  getters: {
    contributorsCount: (state) => {
      return Object.keys(state.contributors).length;
    },
  },
});
