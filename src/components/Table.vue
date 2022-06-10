<template>
  <div class="row content">
    <table>
      <thead>
        <tr>
          <th>
            <IconSort :asc="true" style="width: 15px" />
            Kaibano
          </th>
          <th>Italiano</th>
          <th>Aggiunto da</th>
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
            :class="{ contributor: key === 'AggiuntoDa' }"
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
  border-spacing: 0px;
}

div.row.content {
  clip-path: inset(0 0 0 0 round 0.6em);
}

tbody {
  overflow-x: scroll;
}

tbody tr {
  background-color: rgba(0, 0, 0, 0.4);
}

th {
  background-color: #3f1c6f;
  padding: 0.4em;
  z-index: 2;
  text-align: left;
  font-weight: bold;

  top: 0px;
  position: sticky;
  position: -webkit-sticky;
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

  td.contributor {
    font-size: 0.85rem;
  }
}

</style>
