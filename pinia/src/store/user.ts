
import { defineStore } from 'pinia'
// 第一个参数是应用程序中 store 的唯一 id
export const useUserStore = defineStore('users', {
  // state 是 store 的状态，可以理解为 store 的数据
  state: () => {
    return {
      name: '随缘',
      age: 18
    }
  },
  // getters 是可以被外部调用的计算属性，可以理解为 store 的计算属性
  getters: {
    fullName(state) {
      return state.name + '66666' 
    }
  },
  // actions 是可以被外部调用的方法，可以理解为 store 的方法
  actions: {
    changeName(name: string) {
      this.name = name
    }
  }
})