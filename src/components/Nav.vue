<template>
  <nav>
    <!-- <button id="menu"><font-awesome-icon icon="fas fa-bars" /></button> -->
    <div id="menu-items">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
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
nav > a:last-child {
  padding-right: 25%;
}
nav > a {
  padding: 15px;
  color: black;
}
nav button {
  float: right;
  margin-right: 35px;
  background-color: var(--primary-color);
}
</style>
