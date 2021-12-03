<template>
  <div class="stats">
    <h2>STATISTICHE</h2>
    <ul>
      <li>
        Il dizionario contiene
        <span class="hl"> {{ dictionary.words.length }} parole </span>
      </li>
      <li>
        Il dizionario è stato sincronizzato il
        <span class="hl">{{ dictionaryVersion }}</span>
      </li>
      <li>
        <span class="hl"> {{ dictionary.contributorsCount }} utenti</span>
        hanno contribuito al dizionario. I top 5 sono:
      </li>
    </ul>
    <Leaderboard />

    <h2>Tue statistiche</h2>
    <ul>
      <li>
        Hai aperto questa tab da
        <span class="hl">
          {{ app.elapsedSeconds }}
          second{{ app.elapsedSeconds === 1 ? "o" : "i" }}</span
        >
        e da quando lo hai fatto:
        <ul>
          <li>
            Hai aperto un totale di
            <span class="hl"
              >{{ app.clickedInternalLinks + 1 }} pagin{{
                app.clickedInternalLinks + 1 === 1 ? "a" : "e"
              }}</span
            >
            su questo sito
          </li>
        </ul>
      </li>
      <li v-if="app.elapsedSeconds !== app.totalTime">
        Hai visualizzato {{ url }} per un totale di
        <span class="hl">{{ app.totalTime }} secondi</span>
        <em> (usando questo browser)</em>
      </li>
      <li v-else>
        Sembra che sia la prima volta che visiti questo sito da questo browser!
        Aggiorna la pagina per sbloccare una nuova statistica!
      </li>
    </ul>
    <h2>INFO TECNICHE</h2>
    <ul>
      <li><b>Versione webapp</b>: {{ appVersion }}</li>
      <li>
        L'ultimo aggiornamento dell'applicazione web è stato fatto il
        {{ buildTimestamp }}
      </li>
      <li><b>Librerie open source</b>: Vue3, Vite, Pinia, Papa-parse</li>
      <li>
        <b>Codice sorgente</b>: <a :href="repository">{{ repository }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { dictionaryStore } from "../stores/dictionary";
import { appStore } from "../stores/app";
import Leaderboard from "./stats/Leaderboard.vue";

export default {
  data() {
    return {
      buildTimestamp: new Date(BUILD_TIMESTAMP).toUTCString(),
      dictionaryVersion: DICTIONARY_VERSION,
      elapsedSecondsSinceLastUpdate: 0,
      appVersion: APP_VERSION,
      app: appStore(),
      url: window.location.host,
      repository: REPOSITORY,
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
  components: { Leaderboard },
};
</script>

<style scoped>
div.stats {
  max-width: 75ch;
}

.hl {
  background-color: var(--violet-highlight-semitransparent);
  color: var(--white);
  font-weight: bold;
  border-radius: 0.3em;
  padding: 0.15em;
}

li {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

em {
  color: rgba(255, 255, 255, 0.75);
}

h2 {
  margin-top: 0;
}
.hl:hover {
  /* background-color: var(--violet-highlight); */
}
</style>
