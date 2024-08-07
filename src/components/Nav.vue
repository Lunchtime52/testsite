<script setup>
import { onMounted, onUnmounted } from "vue";
let sideNav;
onMounted(() => {
  sideNav = document.getElementById("side-nav");
  window.addEventListener("resize", () => {
    sideNav.classList.remove("open");
  });
});
function menuToggle() {
  sideNav.toggleAttribute("hidden");
  // const reflow = element.offsetHeight;

  sideNav.classList.toggle("open");
}
onUnmounted(() => {
  window.removeEventListener("resize", () => {
    if (screen.width > 700) {
      sideNav.classList.remove("open");
    }
  });
});
defineExpose({ menuToggle });
</script>

<template>
  <nav>
    <div>
      <img id="logo" src="/public/vite.svg" alt="" />
      <button id="menu-btn" @click="menuToggle">
        <font-awesome-icon icon="fas fa-bars" />
      </button>
      <div class="menu-item">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
    </div>
    <div id="side-nav" hidden>
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
  background-color: var(--bgcolor);
  align-content: center;
  /* border: #6d027b solid 4px; */
  text-align: center;
}
nav > div {
  justify-content: center;
  align-items: center;
}
#logo {
  float: left;
  margin-left: 25%;
}

.menu-item {
  float: right;
  margin-right: 25%;
  display: flex;
  gap: 25px;
  color: var(--txtcolor);
}
nav button {
  float: right;
  margin-right: 20%;
  color: var(--txtcolor);
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
  right: -350px;
  /* Initially off-screen */
  min-width: 50%;
  height: 100%;
  background-color: var(--bgcolor);
  transition: right 0.3s ease; 
  /* Smooth transition for opening/closing */
  z-index: 100; 
  /* Ensure it's above other content */
  display: none;
}
#side-nav.open {
  right: 0;
}
@media screen and (max-width: 700px) {
  .menu-item {
    display: none;
  }
  #menu-btn {
    display: inline;
  }
  #side-nav {
    display: block;
  }
  #logo {
    margin-left: 20%;
  }
}
</style>
