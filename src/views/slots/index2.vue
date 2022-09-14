<template>
  <div>
    <child-com title="slot测试">
      <template #game>
         <ul v-for="item in games" :key="item">
          <li>{{item}}</li>
        </ul>
      </template>
      <template #music>
        <ul v-for="item in musics" :key="item">
          <li>{{item}}</li>
        </ul>
      </template>
      <div>slot默认内容</div>
    </child-com>
  </div>
</template>
<script setup>
  import ChildCom from './child2.vue'
  
  const games = ['gameA', 'gameB','gameC']
  const musics = ['musicsA', 'musicsB','musicsC']
</script>
<style scoped>

</style>