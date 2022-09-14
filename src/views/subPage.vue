<template>
  <div style="border: 1px solid red;">
    <div>
      {{greetingMessage}},{{ category }}
    </div>
    <ul v-for="item in newGoods" :key="item.name">
      <li>{{item.name}}</li>
    </ul>
    <button @click="dispatchEvent">click me</button>
  </div>

</template>

<script>
import { onMounted } from "vue";

export default {
  props: {
    category: String,
    greetingMessage: String,
    newGoods: Array
  },
  setup(props, context) {

    const from = 'subPage'
    onMounted(()=>{
      console.log('subpage')
    })
    const dispatchEvent = ()=>{
      //1、或者可以在组件上使用$emit('someEvent')
      /**
       * 2、可以使用 const {  ctx } = getCurrentInstance()
       * ctx.$emit
       */
      //3
      context.emit('someEvent', from)

      /**
       * 如果是script setup的形式
       * 参考https://stackoverflow.com/questions/68260555/how-to-emit-event-from-child-to-parent-in-vue3-with-script-setup-syntax
       */
    }
    return {
      dispatchEvent
    }

  },
  // mounted() {
  //   console.log(this.newGoods)
  // }
}
</script>

<style scoped>

</style>
