<template>
  <div class="zhi-de" ref="myRef">
    <van-nav-bar title="植得">
      <template #right>
        <div class="nav-bar-right">
          <van-icon name="search" size="25px" color="#A2A2A2" />
          <van-icon name="envelop-o" size="25px" color="#A2A2A2" />
        </div>
      </template>
    </van-nav-bar>
    <!-- <child
      ref="childRef"
      v-model:color="mycolor"
      names="yangyandong"
      @parentFn="parentFn"
    /> -->
    <!-- <van-button type="primary" url="/homes">跳转原页面</van-button> -->
    <Tabbar />
    <!-- <van-slider v-model="initValue" bar-height="4px" active-color="#ee0a24">
      <template #button>
        <img style="width: 30px;height:30px;" src="https://tse1-mm.cn.bing.net/th/id/R-C.a6c8a254a283d794675b4ca512c5e09d?rik=6JqrPhsvA8Ajjg&riu=http%3a%2f%2fpic1.arkoo.com%2f8AA9CEC50BD04F7587B2F82DAC75F5F9%2fpicture%2fwebsite%2fs%2fkoohomexheand.jpg&ehk=Ed4QMnCTg12PJzeIOuHR5S1fcooiSuT73QkZjgOwnvE%3d&risl=&pid=ImgRaw&r=0" />
      </template>
    </van-slider> -->
    <van-button type="primary" @click="dyLoad">动态加载</van-button>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, provide, h } from "vue";
// import Tabbar from "@/components/Tabbar.vue";

// import child from "./child.vue";

const onChange = ()=> {

}
// const childRef = ref("childRef");
const myRef = ref(null)


// 向子组件提供数据
provide("mycolor", mycolor);

onMounted(() => {
  
  // childRef.value.changeName();
});

// function parentFn(params) {
//   console.log(`父组件的方法${params}`);
// }
function dyLoad(){
  console.log('dyLoad')
  const _h = h('div', {
    style: {
      border: '1px solid red',
      height: '40px'
    }
  })
  console.log(_h)
  // myRef.value.append(_h)
}

</script>
<style scoped lang="less">
.zhi-de {
  .nav-bar-right > i:nth-child(1) {
    margin-right: 20px;
  }
  .box {
    font-size: 20px;
    color: v-bind("mycolor");
  }
}
.custom-button {
    width: 15px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
</style>
