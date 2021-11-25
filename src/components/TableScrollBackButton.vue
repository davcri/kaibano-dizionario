<template>
  <button id="scrollback" @click="scrollToTop" ref="btn" :class="{ hidden }">
    Torna su
  </button>
</template>

<script>
export default {
  mounted() {
    // When the user scrolls down 20px from the top of the document, show the button
    this.scrollFunction();
    window.onscroll = () => {
      this.scrollFunction();
    };
  },
  data() {
    return {
      hidden: true,
    };
  },
  methods: {
    scrollFunction() {
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
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
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
  bottom: -4em;
}
</style>
