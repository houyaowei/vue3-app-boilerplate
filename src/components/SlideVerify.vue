<template>
  <!-- <van-popup
    v-model="showPopup"
    closeable
    close-icon="close"
    class="popup-slide-box"
    @close="close"
  > -->
  <div class="popup-title">请完成安全验证</div>
  <div class="popup-content" @touchmove.prevent>
    <slide-verify
      ref="slideblock"
      :imgs="slideImgs"
      @again="onAgain"
      @fulfilled="onFulfilled"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh"
      :accuracy="accuracy"
      :slider-text="text"
    ></slide-verify>
    <!-- <div>{{msg}}</div> -->
    <button @click="handleClick"></button>
  </div>
  <!-- </van-popup> -->
</template>

<script>
import { ref } from "vue";
export default {
  name: "SlideVerify",
  setup() {
    const showPopup = ref(false);
    const text = ref("向右滑");
    // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
    let accuracy = ref(3);
    // 可自定义拼图图片数组，未传则使用插件内默认的图片数组
    let slideImgs = ref([""]);

    const msg = ref("");
    const onSuccess = () => {
      msg.value = "login success";
      // this.msg = "login success, 耗时${(times / 1000).toFixed(1)}s";
      console.log("去登录");
      // this.$emit("slideSuccess"); // 验证成功向父组件发送函数
    };
    const onFail = () => {
      msg.value = "";
      console.log("验证不通过");
    };
    const onRefresh = () => {
      console.log("点击了刷新小图标");
      msg.value = "";
    };
    const onFulfilled = () => {
      console.log("刷新成功啦！");
    };
    const onAgain = () => {
      console.log("检测到非人为操作的哦！");
      msg.value = "try again";
      // 刷新
      // this.$refs.slideblock.reset();
    };
    const handleClick = () => {
      // 父组件直接可以调用刷新方法
      // this.$refs.slideblock.reset();
    };
    const close = () => {
      showPopup.value = false;
    };
    return {
      showPopup,
      text,
      accuracy,
      slideImgs,
      msg,
      onSuccess,
      onFail,
      onRefresh,
      onFulfilled,
      onAgain,
      handleClick,
      close,
    };
  },
};
</script>
