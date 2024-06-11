<script setup>
import Row from './components/Row.vue'
import { ref } from 'vue';
import About from './components/About.vue'

const rows=ref(5)
</script>

<template>
 
  <p>Hello World</p>
  <!-- <Row v-for="n in rows" :key="n" :num="n"></Row> -->
<!-- <Row></Row>   -->
<About></About>
</template>

<style scoped>

</style>
