<template>
  <div>
    <h1>测试axios二次封装</h1>
  </div>
</template>

<script setup lang="ts">
import request from '@/utills/request'
import { onMounted } from 'vue'

//当组件挂载完毕发送请求
onMounted(() => {
  console.log('1111')
  request({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  }).then((res) => {
    console.log(res)
  })
})
</script>

<style scoped>
</style>
