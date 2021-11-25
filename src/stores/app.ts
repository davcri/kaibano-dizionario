import { defineStore } from "pinia";

export const appStore = defineStore("appStore", {
  state: () => ({
    elapsedSeconds: 0,
    totalTime: 0,
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
