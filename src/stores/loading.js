import { defineStore } from "pinia";

export const useLoadingStore = defineStore({
  id: "loading",
  state: () => ({
    show: false
  }),
  getters: {
    getLoadingInfo: (state) => {
      return state.show;
    },
  },
  actions: {
    setLoadingInfo(value) {
      this.show = value
    },
  },
});
