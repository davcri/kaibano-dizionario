<template>
  <div class="leaderboard">
    <div class="entry" v-for="(arr, i) in sortedContributors">
      <span class="position"> {{ i + 1 }}.</span>

      <span class="contributor">
        {{ arr[0] }}
      </span>
      <span class="words hl">
        {{ arr[1] }} parol{{ arr[1] === 1 ? "a" : "e" }}
      </span>
    </div>
  </div>
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
div.leaderboard {
  margin: 1em;
}

div.entry {
  margin: 0.4rem;
  margin-left: 3rem;
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
