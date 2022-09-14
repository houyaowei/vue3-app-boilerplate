import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userInfo: {
      name: '',
      age: ''
    }
  }),
  getters: {
    getUserInfo: (state) => {
      return state.userInfo
    }
  },
  actions: {
    registerUser(name,pass) {
      //调service接口
      console.log('store registerUser, 参数：', name, pass)
      this.userInfo = {
        name,
        age : 22
      }
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
