<template>
  <div>
    <child-com title="游戏列表">
      <ul v-for="item in games" :key="item">
        <li>{{item}}</li>
      </ul>
    </child-com>

    <child-com title="音乐列表">
      <ul v-for="item in musics" :key="item">
        <li>{{item}}</li>
      </ul>
    </child-com>
  </div>
</template>
<script setup>
  import ChildCom from './child.vue'
  
  const games = ['gameA', 'gameB','gameC']
  const musics = ['musicsA', 'musicsB','musicsC']
</script>
<style scoped>

</style>