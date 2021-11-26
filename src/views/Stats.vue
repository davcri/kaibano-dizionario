<template>
  <h2>Statistiche</h2>
  <ul>
    <li>
      Il dizionario contiene
      <span class="hl"> {{ dictionary.words.length }} parole </span>
    </li>
    <li>
      Hai aperto questa tab da
      <span class="hl"> {{ app.elapsedSeconds }} secondi </span>
    </li>
    <li v-if="app.elapsedSeconds !== app.totalTime">
      Da questo browser hai visualizzato {{ url }} da
      <span class="hl">{{ app.totalTime }} secondi </span>
    </li>
    <li v-else>
      Sembra che sia la prima volta che visiti questo sito da questo browser!
      Aggiorna la pagina per sbloccare una nuova statistica!
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

<style scoped>
.hl {
  background-color: var(--violet-highlight);
  color: var(--white);
  font-weight: bold;
  border-radius: 0.3em;
  padding: 0.1em;
}

li {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.hl:hover {
  /* background-color: var(--violet-highlight); */
}
</style>
