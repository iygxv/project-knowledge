<template>
  <div>
    <div>pinia 数据</div>
    姓名: {{ name }}
    <br/>
    姓名2: {{ name2 }}
    <br/>
    全名: {{ userStore.fullName }}
    <br/>
    年龄: {{ userStore. age }}
    <br/>
    <button @click="btn">直接修改姓名</button>
    <button @click="userStore.changeName('随缘 666666666')">通过 action 定义的方法修改姓名</button>
    <button @click="btn2">批量修改 state</button>

    <button @click="btn3">重置</button>
  </div>
</template>

<script setup lang="ts">
import {storeToRefs } from 'pinia'
import { useUserStore } from "../store/user";
const userStore = useUserStore();
console.log('userStore:', userStore)
// 解构
const { name } = userStore

// 使用storeToRef
const {name: name2} = storeToRefs(userStore)

const btn = () => {
  name2.value = '随缘 7777777'
}
const btn2 = () => {
  userStore.$patch((state) => {
    state.name = '随缘 888888'
    state.age = 20
  })
}
const btn3 = () => {
  userStore.$reset()
}
// 订阅状态
userStore.$subscribe((mutation, state) => {
  console.log('mutation:', mutation)
  console.log('state:', state)
})
</script>
 