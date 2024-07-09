<script setup>
// import { ref } from 'vue';
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// const rows=ref(5)
</script>

<template>
  
 <nav>
  
<!-- Suggested code may be subject to a license. Learn more: ~LicenseLog:505972620. -->
   <button id="menu"><font-awesome-icon icon="fas fa-bars" />
  </button>
<div id="menu-items">
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/contact">Contact</RouterLink></div>
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
  align-content: center;
 text-align: right;
 /* margin-right: 25%; */
  
}
nav > a:last-child{
  padding-right: 25%;
}
nav > a {
  padding: 15px;
  color: black;
  
}
nav button{
  float: right;
  margin-right: 35px;
  background-color: var(--primary-color);
}
</style>
