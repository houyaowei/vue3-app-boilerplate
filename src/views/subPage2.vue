<template>
  <div style="border: 1px solid red;">
    <div>
      {{ category }}
    </div>
  </div>

</template>

<script>
import { onMounted,  } from "vue";

/**
 * TODO:继续完善组件通信
 * https://blog.csdn.net/zjjcchina/article/details/122357661
 */
export default {
  props: {
    category: String
  },
  setup(prop,context) {
    onMounted(()=>{
      console.log('subpage')
    })
    context.expose({
      name: 'subpage2',
      someMethod(){
        console.log('subpage2中的方法')
      }
    })

  },
  // mounted() {
  //   console.log(this.newGoods)
  // }
}
</script>

<style scoped>

</style>
