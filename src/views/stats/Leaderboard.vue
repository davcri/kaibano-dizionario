<template>
  <ol class="leaderboard">
    <li class="entry" v-for="(arr, i) in sortedContributors">
      <span class="contributor">
        {{ arr[0] }}
      </span>
      <span class="words hl">
        {{ arr[1] }} parol{{ arr[1] === 1 ? "a" : "e" }}
      </span>
    </li>
  </ol>
</template>

<script>
import { dictionaryStore } from "../../stores/dictionary";

export default {
  setup() {
    return {
      dictionary: dictionaryStore(),
    };
  },
  computed: {
    sortedContributors() {
      const contribs = [];
      for (const el in this.dictionary.contributors) {
        contribs.push([el, this.dictionary.contributors[el]]);
      }
      return contribs
        .sort((a, b) => b[1] - a[1])
        .filter((_, idx) => {
          return idx < 5;
        });
    },
  },
};
</script>

<style scoped>
.leaderboard {
  margin-top: 2em;
}

li {
  margin-top:0.5em; 
  margin-bottom: 0.5em;
}
span.position {
  padding: 0.1rem;
}

span.contributor {
  font-weight: bold;
  margin-left: 0.5em;
}

span.words {
  background-color: var(--accent-semitransparent);
  color: var(--white);
  border-radius: 0.3em;
  padding: 0.15em;
  margin: 1ch;
}
</style>
