<template>
  <div class="name">{{name}}</div>
  <Item />
</template>

<script setup>
  import { onMounted } from 'vue';
  import { usePeoplesStore } from '../store'
  import Item from "./components/item.vue"

  const name='peoples view page '
  const store = usePeoplesStore()
  onMounted(()=> {
    console.log('people Store: ', store.addPeople())
  })
</script>

<style scoped>
  .name {
    width: 200px;
    height: 100px;
    border: 1px solid blueviolet;
  }
</style>