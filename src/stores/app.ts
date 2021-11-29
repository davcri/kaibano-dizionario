import { defineStore } from "pinia";

import { Howl } from "howler";
import sfx1 from "../assets/kenney-sounds/Audio/drop_001.ogg";
import click from "../assets/kenney-sounds/Audio/glitch_004.ogg"; // TODO: use correct format
import minimize from "../assets/kenney-sounds/Audio/drop_004.ogg";

export const appStore = defineStore("appStore", {
  state: () => ({
    elapsedSeconds: 0,
    totalTime: 0,
    clickedInternalLinks: -1,
    sfx: new Howl({ src: sfx1, volume: 0.3 }),
    click: new Howl({ src: click, volume: 0.3 }),
    minimize: new Howl({ src: minimize, rate: 1.2, volume: 0.3 }),
  }),
  actions: {
    init() {
      const localStorageStats = localStorage.getItem("stats");
      const stats = JSON.parse(localStorageStats);
      if (stats?.totalTime) {
        this.totalTime = stats.totalTime;
      }
      setInterval(() => {
        this.elapsedSeconds += 1;
        this.totalTime += 1;
        localStorage.setItem(
          "stats",
          JSON.stringify({ totalTime: this.totalTime })
        );
      }, 1000);
    },
  },
});
