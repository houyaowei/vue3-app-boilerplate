import { defineStore } from 'pinia'

export const usePeoplesStore = defineStore({
  id: 'peoples',
  state: () => ({
    peoples: []
  }),
  getters: {
    getAllPeoples: (state) => {
      return state.peoples
    }
  },
  actions: {
    addPeople() {
      console.log('usePeoplesStore addPeople')
      this.peoples.push({
        name: 'test',
        count: 1
      })
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        // key: '', //可以不配置，默认是storeid
        storage: window.localStorage,
        // paths: ['nested.data'] //如果想缓存部分数据，就配置该项,默认缓存所有数据
      },
    ],
  },
})