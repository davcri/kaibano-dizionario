<template>
  <h2>STATISTICHE</h2>
  <ul>
    <li>
      Il dizionario contiene
      <span class="hl"> {{ dictionary.words.length }} parole </span>
    </li>
    <li>
      <!-- {{ dictionary.contributorsCount }} -->
      <span class="hl">Poche</span>
      persone hanno contribuito al dizionario. <br />
      <em>
        Il counter verrà sbloccato quando ci saranno almeno 3 contributor.
        <br />
        Vedi la sezione <a href="/#/info">info</a> per scoprire come
        contribuire.
      </em>
    </li>
  </ul>
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
          Hai aperto un totale di {{ app.clickedInternalLinks }} pagin{{
            app.clickedInternalLinks === 1 ? "a" : "e"
          }}
          di questo sito
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
    <li><b>Versione webapp</b>: v{{ appVersion }}</li>
    <li>
      L'ultimo aggiornamento dell'applicazione web è stato fatto il
      {{ dictionaryLastUpdate }}
    </li>
    <li><b>Librerie open source</b>: Vue3, Vite, Pinia, Papa-parse</li>
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

em {
  color: rgba(255, 255, 255, 0.75);
}

.hl:hover {
  /* background-color: var(--violet-highlight); */
}
</style>
