<template>
  <!--svg:图标外层容器节点，内部需要与use标签结合使用-->
  <svg :style="{width,height}">
    <!--x1ink:href执行用哪一个图标，属性值务必#icon-图标名字 -->
    <use :xlink:href="prefix+name" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
//接收父组件传递的参数
defineProps({
  //xlink:href属性值前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  //提供使用的图标名称
  name: String,
  //接收颜色
  color: {
    type: String,
    default: '',
  },
  //接收图标尺寸
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped lang="less">
</style>
