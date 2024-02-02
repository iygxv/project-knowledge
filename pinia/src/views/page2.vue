<template>
  <div>
    page2 页面
    <button @click="handleJump">跳转 page1</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const handleJump = () => {
  router.push('/page1');
}
</script>
 
<style lang = "scss" scoped>
  
</style>