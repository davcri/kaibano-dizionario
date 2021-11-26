<template>
  <button id="scrollback" @click="scrollToTop" ref="btn" :class="{ hidden }">
    Torna su
  </button>
</template>

<script>
import { appStore } from "../stores/app";

export default {
  mounted() {
    this.scrollFunction();
    window.onscroll = () => {
      this.scrollFunction();
    };
  },
  data() {
    return {
      hidden: true,
      animating: false,
    };
  },
  methods: {
    scrollFunction() {
      if (this.animating) {
        if (
          document.body.scrolltoTop <= 50 ||
          document.documentElement.scrollTop <= 50
        )
          this.animating = false;
        return;
      }
      if (
        document.body.scrollTop > 250 ||
        document.documentElement.scrollTop > 250
      ) {
        this.hidden = false;
      } else {
        this.hidden = true;
      }
    },
    scrollToTop() {
      this.animating = true;
      this.hidden = true;
      const app = appStore();
      app.$state.minimize.play();
      window.scrollTo({ top: 0, behavior: "smooth" });
      // document.body.scrollTop = 0;
      // document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
button {
  position: fixed;
  bottom: 2em;
  right: 1em;
  padding: 1em;
  z-index: 2;

  transition: bottom 0.4s;
  transition-timing-function: cubic-bezier(0.2, 1.3, 0.5, 1);
}

button.hidden {
  transition: bottom 0.3s;
  transition-timing-function: ease-out;
  bottom: -5em;
}
</style>
