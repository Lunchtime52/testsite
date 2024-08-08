<script setup>
import { onMounted, onUnmounted } from "vue";
import {useRouter} from 'vue-router';

let sideNav;
const router = useRouter();
onMounted(() => {
  sideNav = document.getElementById("side-nav");
  window.addEventListener("resize", () => {
    sideNav.classList.remove("open");
  });
router.afterEach(() => {
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
        <RouterLink to="/services">Services</RouterLink>

      </div>
    </div>
    <div id="side-nav" hidden>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
        <li><RouterLink to="/services">Services</RouterLink></li>
        <!-- ... more navigation links -->
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  padding: 10px 0;
  width: 100%;
  position: fixed;
  top: 0;
  height: 60px;
  background-color: var(--bgcolor);
  align-content: center;
  border-bottom: 3px solid var(--secondary-color);
  border-radius: 0 0 10px 10px;
  text-align: center;
}
nav > div {
  justify-content: center;
  align-items: center;
}
#logo {
  float: left;
  margin-left: 30%;
}

.menu-item {
  float: right;
  margin-right: 20%;
  display: flex;
  gap: 20px;
  color: var(--txtcolor);
}
nav button {
  float: right;
  margin-right: 15%;
  font-size: 1.45rem;

}
#menu-btn {
  display: none;
}
#side-nav ul {
  list-style: none;
  padding: 0;
  margin-top:50px;
  
  
}
#side-nav li {
  /* padding-top: 10px; */
  margin: 20px 0;
  
}
#side-nav {
  position: fixed;
  border:2px solid var(--secondary-color);
  border-radius: 10px;
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
