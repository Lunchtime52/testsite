<script setup>
import Row from './components/Row.vue'
import { ref } from 'vue';
import About from './components/About.vue'
import Services from './components/Services.vue'

const rows=ref(5)
</script>

<template>
 
  <!-- <p>Hello World</p> -->
  <!-- <Row v-for="n in rows" :key="n" :num="n"></Row> -->
<!-- <Row></Row>   -->
<About></About>
<Services></Services>
</template>

<style scoped>

</style>
