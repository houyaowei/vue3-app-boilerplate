<template>
<h3>{{_title}}</h3> 
  <slot></slot>
</template>
<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: ''
    }
  })
const _title = props.title
  
</script>
<style scoped>

</style>