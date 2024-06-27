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
@import './style.css';
nav{
  padding:10px;
  width: 100%;
  position: fixed;
  top: 0;
  height: 55px;
  background-color:var(--secondary-color);
  display: flex;
  justify-content:center;
  align-items: center;
  
}
nav > a {
  padding: 15px;
  color: black;
  
}
</style>
