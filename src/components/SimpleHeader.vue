<template>
  <div class="my-van-nav-bar">
    <van-nav-bar :title="title" :left-arrow="left_arrow" @click-left="goBack">
      <template #right>
        <slot></slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  back: {
    type: String,
    default: "",
  },
  left_arrow: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(["callback"])
const router = useRouter()

const goBack = () => {
  if (!props.back) {
    router.go(-1);
  } else {
    router.push({ path: props.back });
  }
  emit("callback");
}

</script>
<style scoped lang="less">

</style>