<script setup>
// import { ref } from 'vue';
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router';

// const rows=ref(5)
</script>

<template>
 <nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/contact">Contact</RouterLink>
 </nav>
  <!-- <p>Hello World</p> -->
  <!-- <Row v-for="n in rows" :key="n" :num="n"></Row> -->

<RouterView></RouterView>

<Footer></Footer>
</template>

<style scoped>
nav{
  padding:10px;
}
nav > a + a {
  margin-left: 20px;
}
</style>
