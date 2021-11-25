<template>
  <h2>Statistiche</h2>
  <ul>
    <li>Il dizionario contiene {{ dictionary.words.length }} parole</li>
    <li>Sei su questo sito da {{ app.elapsedSeconds }} secondi</li>
    <li>
      Visualizzando {{ url }} hai totalizzato un tempo totale di
      {{ app.totalTime }} secondi
    </li>
  </ul>
  <h2>INFO TECNICHE</h2>
  <ul>
    <li><b>Versione webapp</b>: v{{ appVersion }}</li>
    <li>
      L'ultimo aggiornamento dell'applicazione web è stato fatto il
      {{ dictionaryLastUpdate }}
    </li>
    <li><b>Librerie</b>: Vue3, Vite, Pinia, Papa-parse</li>
    <li><b>Codice sorgente</b>: in arrivo</li>
  </ul>
</template>

<script>
import { dictionaryStore } from "../stores/dictionary";
import { appStore } from "../stores/app";

export default {
  data() {
    return {
      dictionaryLastUpdate: new Date(BUILD_TIMESTAMP).toUTCString(),
      elapsedSecondsSinceLastUpdate: 0,
      appVersion: APP_VERSION,
      app: appStore(),
      url: window.location.host,
    };
  },
  setup() {
    return {
      dictionary: dictionaryStore(),
    };
  },
  mounted() {
    this.intervalId = setInterval(this.onTick, 1000);
  },
  unmounted() {
    clearInterval(this.intervalId);
  },
  methods: {
    onTick() {
      this.elapsedSecondsSinceLastUpdate += 1;
    },
  },
};
</script>
