<script setup>
import TermSearch from "./TermSearch.vue";
</script>

<template>
  <TermSearch />

  <div class="row content">
    <table>
      <thead>
        <tr>
          <th>Kaibano</th>
          <th>Italiano</th>
          <th class="col-contributor">Aggiunto da</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(word, j) in words"
          :key="`${word.Kaibano} ${j}`"
          :class="{ 'row-alternate': j % 2 === 0 }"
        >
          <td @click="pronounce(word.Kaibano)">
            {{ word.Kaibano }}
            <span
              v-if="word.Nuovo"
              class="new-badge"
              title="Nuova parola"
            >🆕</span>
          </td>

          <td @click="pronounce(word.Italiano)">
            {{ word.Italiano }}
          </td>

          <td
            class="contributor col-contributor"
            @click="pronounce(word['AggiuntoDa'])"
          >
            {{ word["AggiuntoDa"] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["words"],
  methods: {
    pronounce(text) {
      if (!text) return;
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = "it";
      window.speechSynthesis.speak(msg);
    },
  },
};
</script>

<style scoped>
div.row.content {
  overflow: auto;
  max-height: 70vh;
  clip-path: inset(0 0 0 0 round 0.6em);
}

table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed; 
}

th,
td {
  width: 50%;
  padding: 0.8em;
  text-align: left;
  overflow-wrap: anywhere;
  word-break: normal;
  vertical-align: top;
}

thead th {
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #3f1c6f;
  font-weight: bold;
}

tbody tr {
  background-color: rgba(0, 0, 0, 0.4);
}

tbody tr.row-alternate {
  background-color: rgba(200, 0, 0, 0.1);
}

td {
  text-transform: capitalize;
  transition: all 0.15s;
}

td:hover {
  background-color: #4e2e7a;
  transform: translateX(-0.2rem);
  cursor: pointer;
  z-index: 1;
}

td.contributor {
  color: var(--muted-slightly);
  text-transform: none;
  font-size: 0.75rem;
}

@media screen and (max-width: 799px) {
  th.col-contributor,
  td.col-contributor {
    display: none;
  }
}

@media screen and (min-width: 800px) {
  th:nth-child(1),
  td:nth-child(1),
  th:nth-child(2),
  td:nth-child(2) {
    width: 37.5%;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 25%;
  }
}

@media screen and (min-width: 480px) {
  th {
    padding: 0.8em;
  }

  td {
    padding: 0.3em;
    padding-left: 1em;
  }
}
</style>