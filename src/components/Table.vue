<script setup>
import TermSearch from "./TermSearch.vue";
</script>

<template>
  <TermSearch />

  <div class="row content">
    <table>
      <thead>
        <tr>
          <th>
            <!-- <IconSort :asc="true" style="width: 15px" /> -->
            Kaibano
          </th>
          
          <th>Italiano</th>
          <th class="md-hide" style="width: 25%">Aggiunto da</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(word, j) in words"
          :key="`${word.Kaibano} ${j}`"
          :class="{ 'row-alternate': j % 2 === 0 }"
        >
          <td
            v-for="(val, key, idx) of word"
            :key="`${val} ${idx}`"
            @click="pronounce(val)"
            :class="{ contributor: key === 'AggiuntoDa', 'md-hide': idx ==2 }"
          >
            {{ val }}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <TableScrollBackButton /> -->
  </div>
</template>

<script>
import TableScrollBackButton from "./TableScrollBackButton.vue";
import IconSort from "./icons/IconSort.vue";

export default {
  props: ["words"],
  methods: {
    pronounce(text) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = "it";
      window.speechSynthesis.speak(msg);
    },
  },
  components: { TableScrollBackButton, IconSort },
};
</script>

<style scoped>
table {
  width: 100%;
  overflow-x: hidden;
  display: grid;
  border-spacing: 0px;

  word-break: break-word;
}

div.row.content {
  clip-path: inset(0 0 0 0 round 0.6em);
}

tbody tr {
  background-color: rgba(0, 0, 0, 0.4);
}

tbody tr, tbody tr td {
  width: 50%;
}

@media screen and (min-width: 480px) {
  tbody tr :nth-child(1) {
    width: calc(75% / 2);
  }
  tbody tr :nth-child(2) {
    width: calc(75% / 2);
  }
  tbody tr :nth-child(3) {
   width: 25%;
  }
}

thead {
  display: flex;
  width: 100%;
  top: 0px;
  display: inline-table;
  position: sticky;
  position: -webkit-sticky;
  background-color: #3f1c6f;
  z-index: 2;
}

/* th */
th {
  padding: 0.5em;
  width: 50%;
  padding-left: 0.8em;
  flex: 1;
  text-align: left;
  font-weight: bold;
}
th:nth-child(2) {
  background-color: rgba(0,0,0,0.05);
}
@media screen and (min-width: 480px) {
  th {
    width: calc(75%/2);
  }
}


tr.row-alternate {
  background-color: rgba(200, 0, 0, 0.1);
}

td {
  padding: 0.2em;
  padding-left: 1em;

  background-color: #5a329100;
  transition: all 0.15s;
  text-transform: capitalize;
}

td.contributor {
  color: var(--muted-slightly);
  text-transform: none;
  font-size: 0.75rem;
}

td:hover {
  background-color: #4e2e7a;
  z-index: 1;
  cursor: pointer;
  transition: all 0.15s;
  transform: translateX(-0.2rem);
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

.md-hide{
  display: none;
}
@media only screen and (min-width: 600px) {
  .md-hide{
    display: revert;
  }
}

.md-hide{
  display: none;
}
@media only screen and (min-width: 600px) {
  .md-hide{
    display: revert;
  }
}

</style>
