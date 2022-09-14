<template>
  <div class="name">{{name}}</div>
  <Item />
</template>

<script setup>
  import { onMounted } from 'vue';
  import { useGoodsStore } from '../store'
  import Item from "./components/item.vue"

  const name='goods view page '
  const store = useGoodsStore()
  onMounted(()=> {
    console.log('goods Store: ', store.addCategories())
  })
</script>

<style scoped>
  .name {
    width: 200px;
    height: 100px;
    border: 1px solid red;
  }
</style>