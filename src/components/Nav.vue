<script setup>
import { onMounted } from "vue";
let sideNav;
onMounted(() => {
  sideNav = document.getElementById("side-nav");
});
function menuToggle() {
  sideNav.classList.toggle("open");
}
defineExpose({ menuToggle });
</script>

<template>
  <nav>
    <button id="menu-btn" @click="menuToggle">
      <font-awesome-icon icon="fas fa-bars" />
    </button>
    <div id="menu-items">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
    <div id="side-nav">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
        <!-- ... more navigation links -->
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  padding: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  height: 55px;
  background-color: var(--secondary-color);
  align-content: center;
  text-align: right;
  /* margin-right: 25%; */
}

#menu-items :last-child {
  padding-right: 10%;
}
#menu-items * {
  padding: 15px;
  /* color: black; */
}
nav button {
  float: right;
  margin-right: 35px;
  background-color: var(--primary-color);
}
#menu-btn {
  display: none;
}
#side-nav ul {
  list-style: none;
  padding: 0;
}
#side-nav li {
  padding-top: 10px;
}
#side-nav {
  position: fixed;
  text-align: center;
  top: 74px;
  right: -250px; /* Initially off-screen */
  min-width: 50%;
  height: 100%;
  background-color: #6d027b;
  transition: right 0.3s ease; /* Smooth transition for opening/closing */
  z-index: 100; /* Ensure it's above other content */
  display: none;
}
#side-nav.open {
  display: block;
  right: 0;
}
@media screen and (max-width: 700px) {
  #menu-items {
    display: none;
  }
  #menu-btn {
    display: inline;
  }
}
</style>
