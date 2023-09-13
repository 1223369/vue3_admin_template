<template>
  <div class="box">
    <h1>我是app根组件</h1>
  </div>
</template>

<script setup lang="ts">
const str = '我爱你'
</script>

<style scoped lang="scss">
.box {
  width: 600px;
  height: 400px;
  background-color: black;
  h1 {
    color: white;
  }
}
</style>
