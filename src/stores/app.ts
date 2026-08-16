import { defineStore } from "pinia";

const SAVE_EACH_SECONDS = 1;

export const appStore = defineStore("appStore", {
  state: () => ({
    elapsedSeconds: 0,
    totalTime: 0,
    clickedInternalLinks: -1,
  }),
  actions: {
    init() {
      const localStorageStats = localStorage.getItem("stats");

      if (localStorageStats === null) {
        console.error("'stats' does not exist in localStorage");
      } else {
        const parsedStats = JSON.parse(localStorageStats);
        if (parsedStats?.totalTime) {
          this.totalTime = parsedStats.totalTime;
        }
        if (parsedStats?.clickedInternalLinks) {
          this.clickedInternalLinks = parsedStats.clickedInternalLinks
        }
      }

      setInterval(() => {
        this.elapsedSeconds += 1;
        this.totalTime += 1;
        if (this.totalTime % SAVE_EACH_SECONDS === 0) {
          localStorage.setItem(
            "stats",
            JSON.stringify({ totalTime: this.totalTime, clickedInternalLinks: this.clickedInternalLinks }),
          );
        }
      }, 1000);
    },
  },
});

import sfx1 from "../assets/kenney-sounds/Audio/drop_001.ogg";
import click from "../assets/kenney-sounds/Audio/glitch_004.ogg";
import minimize from "../assets/kenney-sounds/Audio/drop_004.ogg";

const sfx = Object.assign(new Audio(sfx1), { volume: 0.3 });
const clickSfx = Object.assign(new Audio(click), { volume: 0.3 });
const minimizeSfx = Object.assign(new Audio(minimize), {
  volume: 0.3,
  playbackRate: 1.2,
});

const sfxAssets = {
  sfx,
  click: clickSfx,
  minimize: minimizeSfx,
};

export function playSfx(soundKey: keyof typeof sfxAssets) {
  const sound = sfxAssets[soundKey];
  if (!sound) return;
  sound.currentTime = 0;
  sound
    .play()
    .catch((e: Error) => console.warn("Audio playback blocked by browser:", e));
}
