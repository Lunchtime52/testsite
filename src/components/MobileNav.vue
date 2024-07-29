<template>
    <nav id="side-nav">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <!-- ... more navigation links -->
  </ul>
</nav>
</template>

<style scoped>
/* Initial state: Side nav hidden */
#side-nav {
  position: fixed;
  top: 0;
  left: -250px; /* Initially off-screen */
  width: 250px;
  height: 100%;
  background-color: #f2f2f2;
  transition: left 0.3s ease; /* Smooth transition for opening/closing */
  z-index: 100; /* Ensure it's above other content */
}

/* When side nav is open */
#side-nav.open {
  left: 0;
}

</style>
<script setup>
const menuToggle = document.getElementById('menu-toggle');
const sideNav = document.getElementById('side-nav');

menuToggle.addEventListener('click', () => {
  sideNav.classList.toggle('open');
});

</script>