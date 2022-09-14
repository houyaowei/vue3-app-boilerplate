<script setup>
import { ref, onUnmounted, getCurrentInstance } from 'vue'
import renderComponent from './renderComponent'

const { appContext } = getCurrentInstance()
const container = ref()
let counter = 1
let destroyComp = null

onUnmounted(() => {
  if (destroyComp) {
    destroyComp()
  }
})

const insert = async () => {
  // destroyComp?.()
  destroyComp = renderComponent({
    el: container.value,
    component: (await import('@/views/Home/child.vue')).default,
    props: {
      key: counter,
      msg: 'Message ' + counter++,
    },
    appContext,
  })
}
</script>

<template>
  <div ref="container"></div>
  <div style="margin-top: 50px;margin-left: 30px;">
    <button @click="insert">加载组件</button>
  </div>


</template>
