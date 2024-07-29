<script setup>
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
import { RouterView } from "vue-router";
import{MobileNav} from "./components/MobileNav.vue";
</script>

<template>
  <Nav id="nav"></Nav>
  <!-- <MobileNav id="mobilenav"></MobileNav> -->

  <RouterView></RouterView>

  <Footer></Footer>
</template>

<style scoped>
#nav{
  display: none;
}
@media screen and (min-width: 700px) {
  #nav {
    display: block;
  }
  
}
</style>