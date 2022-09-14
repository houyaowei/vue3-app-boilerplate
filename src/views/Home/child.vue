<template>
  <div class="child">  
    <span>{{ state.name }}</span>
    <div>{{names}}</div>
    <van-button type="primary" @click="clickFn()">调用父组件方法</van-button>
    <div>{{mycolor}}</div>
    <div>{{color}}</div>
  </div>
</template>

<script setup>
import { onMounted, reactive, toRefs, useAttrs, inject } from "vue"
import { Toast } from 'vant'
const props = defineProps({
  names: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
})  
// 声明父组件传入的事件
const emit = defineEmits(['parentFn', 'update:color'])

const attrs = useAttrs()
const mycolor = inject('mycolor')

onMounted(()=>{
  console.log(222,attrs);
  console.log(1111111111,mycolor.value,111111111);
})

// 声明state
const state = reactive({
  name: "Jerry",
});

// 调用父组件的方法
function clickFn(){
  emit('parentFn', 'Tom')
  emit('update:color', 'red')
  Toast.success('颜色值已修改')
}

// 将方法、变量暴露给父组件使用，父组件才可通过ref API拿到子组件暴露的数据
defineExpose({
  ...toRefs(state),  // 解构state
  // 声明方法
  changeName() {
    state.name = "Tom";
  },
});
</script>
<style scoped>
.child{
  border: 1px solid gray;
  padding: 30px;
  background: rgba(0,0,0,.1);
}
</style>