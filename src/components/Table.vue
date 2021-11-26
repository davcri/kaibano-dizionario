<template>
  <div class="wrapper">
    <table>
      <thead ref="head">
        <tr>
          <th v-for="el in headers">
            {{ el }}
          </th>
        </tr>
      </thead>

      <thead ref="headSticky" class="sticky" v-show="sticky">
        <tr>
          <th v-for="el in headers">
            {{ el }}
          </th>
        </tr>
      </thead>

      <tbody ref="tbody">
        <tr
          v-for="(word, j) in words"
          :class="{ 'row-alternate': j % 2 === 0 }"
        >
          <td
            v-for="(field, k) of word"
            @click="pronounce(field)"
            :class="{ contributor: k === 'Aggiunto da' }"
          >
            {{ field }}
          </td>
        </tr>
      </tbody>
    </table>
    <TableScrollBackButton />
  </div>
</template>

<script>
import { Events } from "../App.vue";
import TableScrollBackButton from "./TableScrollBackButton.vue";

export default {
  props: ["headers", "words"],
  data() {
    return {
      sticky: false,
    };
  },
  mounted() {
    Events.on("scrolled", this.onScroll);
    this.checkSticky();
  },
  unmounted() {
    Events.off("scrolled");
    this.killed = true;
  },
  methods: {
    checkSticky() {
      /**
       * @type{HTMLElement}
       */
      const head = this.$refs.head;
      const headSticky = this.$refs.headSticky;
      const tBody = this.$refs.tbody;
      const headRect = head.getBoundingClientRect();
      if (headRect.y < 0) {
        this.sticky = true;
        head.style.height = "0px";
        headSticky.style.top = `${Math.abs(Math.ceil(headRect.y))}px`;
        headSticky.style.transform = `translateY(${-headRect.height}px)`;
        tBody.style.transform = `translateY(${-headRect.height}px)`;
      }

      if (headRect.y >= 0) {
        this.sticky = false;
        headSticky.style.top = ``;
        headSticky.style.transform = ``;
        tBody.style.transform = ``;
      }
    },
    onScroll() {
      this.checkSticky();
    },
    pronounce(text) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = "it";
      window.speechSynthesis.speak(msg);
    },
  },
  components: { TableScrollBackButton },
};
</script>

<style scoped>
div.wrapper {
  width: 100%;
  overflow-x: auto;
}

table {
  border-spacing: 0px;
  width: 100%;
  position: relative;
  border-radius: 0.5em;
  border-collapse: collapse;
  overflow: hidden;
}

thead tr th {
  background-color: #3f1c6f;
  padding: 0.8em;
  z-index: 1;
  text-align: left;
  font-weight: bold;

  position: sticky;
  top: 0;
  position: -webkit-sticky;
}
thead.sticky {
  position: relative;
  width: 100%;
  z-index: 1;
}

tbody {
  overflow-x: scroll;
}

tbody tr {
  background-color: rgba(0, 0, 0, 0.4);
}

tr.row-alternate {
  background-color: rgba(200, 0, 0, 0.1);
}

td {
  padding: 0.3em;
  padding-left: 1em;
}
.contributor {
  color: var(--link-muted);
}

tbody td:hover {
  background-color: #4e2e7a;
  z-index: 1;
  cursor: pointer;
  transition: all 0.15s;
  transform: scale(1.03);
}

tbody td {
  background-color: #5a329100;
  transition: all 0.3s;
  transform: scale(1);
}
</style>
