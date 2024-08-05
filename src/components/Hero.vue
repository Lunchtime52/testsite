<template>
    <div id="hero" class="card">
    <h1>Cracked Windshield?</h1>
    <h2>We've Got You Covered!</h2>
    <h4>Fast, Reliable Auto Glass Repair & Replacement</h4>
    <br />
    <RouterLink to="/contact" class="button"
      >Get a Free Quote Today!</RouterLink
    ></div>
</template>
<style scoped>
#hero {
  background-image: radial-gradient(
      circle,
      rgba(56, 56, 56, 0.696) 45%,
      transparent 75%
    ),
    url("../assets/images/heroimg.png");
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  color: white;
  /* background: radial-gradient(transperent,gray); */
}
.button {
  /* border: 5px solid var(--secondary-color); */
  padding: 15px;
  font-size: large;
  background-color: var(--primary-color);
  border-radius: 10px;
  color: white;
  margin: 8px;
  display: inline-block;
  font-weight: bolder;
}
h1 {
  margin-top: 10px;
}
@media (prefers-color-scheme: light) {
  .button {
    color: white;
  }
}
</style>