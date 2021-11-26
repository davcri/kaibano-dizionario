<script setup>
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";
import { dictionaryStore } from "./stores/dictionary";
import { appStore } from "./stores/app";

const dict = dictionaryStore();
dict.init();
const app = appStore();
app.init();
</script>

<script>
import gsap from "gsap";
import EventEmitter from "eventemitter3";

export const Events = new EventEmitter();

let twn;

export default {
  data() {
    return {
      scrolling: {
        value: 0,
        target: 0,
      },
    };
  },
  mounted() {
    /**
     * @type {HTMLElement}
     */
    const body = document.getElementsByTagName("body").item(0);

    addEventListener("wheel", (ev) => {
      const { deltaY } = ev;
      this.scrolling.target += deltaY * 1.5;
      this.scrolling.target = Math.max(this.scrolling.target, 0);
      const scrollable = body.scrollHeight - window.innerHeight;
      this.scrolling.target = Math.min(this.scrolling.target, scrollable);
      if (twn && twn.isActive()) {
        twn.kill();
        this.animateScroll({ value: this.scrolling.target });
        return;
      }
      this.animateScroll({ value: this.scrolling.target });
    });

    Events.on("scrollToTopBtnClicked", () => {
      // gsap.to(body, {});
      const app = appStore();
      app.$state.minimize.play();
      this.scrolling.target = 0;
      // this.scrolling.value = 0;
      this.animateScroll({ value: this.scrolling.target, duration: 0.3 });
      // body.scrollTo({ top: 0, behavior: "smooth" });
      // document.body.scrollTop = 0;
      // document.documentElement.scrollTop = 0;
    });
  },
  methods: {
    animateScroll({ value, duration = 0.2 } = {}) {
      const body = document.getElementsByTagName("body").item(0);
      return gsap.to(this.scrolling, {
        duration,
        ease: "power2.easeOut",
        value,
        onUpdate: () => {
          body.scrollTo({ top: this.scrolling.value });
          Events.emit("scrolled");
        },
      });
    },
  },
};
</script>

<template>
  <h1>
    DIZIONARIO KAIBANO -
    <span style="color: rgba(255, 0, 0, 0.75)">ITA</span>
    <span style="color: rgba(255, 255, 255, 0.75)">LIA</span>
    <span style="color: rgba(0, 128, 0, 0.75)">NO</span>
  </h1>
  <Navigation style="margin-bottom: 1.5em" />
  <router-view />
  <Footer />
</template>

<style>
@import "./assets/base.css";

html,
body {
  height: 100%;
  background-color: black;
  background: linear-gradient(
    0deg,
    rgba(42, 0, 95, 1) 0%,
    rgba(42, 6, 95, 0.95) 50%,
    rgba(42, 0, 95, 1) 100%
  );
  overflow: hidden;
}

a {
  color: var(--violet);
}

a:visited {
  color: var(--link-muted);
}

a:hover {
  color: var(--violet-highlight);
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.8rem;
  font-weight: normal;
}

@media screen and (min-width: 480px) {
  #app {
    padding: 2rem;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

h1 {
  font-weight: 900;
  font-size: 2.2em;
  line-height: 0.9em;
  user-select: none;
  margin-bottom: 0.5em;
}

h1 span {
  font-weight: 900;
}
</style>

<style scoped>
h1 {
  margin-top: 0.2em;
}
</style>
