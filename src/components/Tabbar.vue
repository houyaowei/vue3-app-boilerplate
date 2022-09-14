<template>
  <div class="my-van-tabbar">
    <van-tabbar route>
      <van-tabbar-item replace to="/Home" icon="home-o">植得</van-tabbar-item>
      <van-tabbar-item replace to="/ManageMoney"  icon="search">理财</van-tabbar-item>
      <van-tabbar-item replace to="/FinancialQuotient"  icon="friends-o">财商</van-tabbar-item>
      <van-tabbar-item replace to="/Accompany"  icon="setting-o">陪伴</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
})
</script>
<style scoped lang="less">

</style>