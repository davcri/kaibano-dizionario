<template>
  <button id="scrollback" @click="scrollToTop" ref="btn" :class="{ hidden }">
    Torna su
  </button>
</template>

<script>
import { Events } from "../App.vue";

export default {
  mounted() {
    this.scrollFunction();
    Events.on("scrolled", this.scrollFunction);
  },
  unmounted() {
    Events.off("scrolled");
  },
  data() {
    return {
      hidden: true,
      animating: false,
    };
  },
  methods: {
    scrollFunction() {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (this.animating) {
        if (scrollTop <= 50) {
          this.animating = false;
          return;
        }
      } else if (scrollTop > 50) {
        this.hidden = false;
      } else {
        this.hidden = true;
      }
    },
    scrollToTop() {
      this.animating = true;
      this.hidden = true;
      Events.emit("scrollToTopBtnClicked");
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
