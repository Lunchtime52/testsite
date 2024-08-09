<template>
  <!-- Hero Section -->
  <div id="hero" class="card"> 
    <h1>Cracked Windshield?</h1>
    <h2>We've Got You Covered!</h2>
    <h4>Fast, Reliable Auto Glass Repair & Replacement</h4>
    <br />
    <!-- Link to Contact Page -->
    <RouterLink to="/contact" class="button"
      >Get a Free Quote Today!</RouterLink
    >
  </div>
</template>

<style scoped>
/* Hero Styles */
#hero {
  background-image: radial-gradient(
      circle,
      rgba(56, 56, 56, 0.696) 45%, /* Dark overlay at 45% */
      transparent 75%  /* Fades to transparent at 75% */
    ),
    url("../assets/images/heroimg.png"); /* Background Image */
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  color: white; /* Text Color */
  padding: 75px 0; /* Top/Bottom Padding */
}
/* Button Styles */
.button {
  padding: 15px;
  font-size: large;
  background-color: var(--primary-color);
  border-radius: 10px;
  color: var(--txtcolor);
  margin: 8px;
  display: inline-block;
  font-weight: bolder;
}
/* Heading 1 Styles */
h1 {
  margin-top: 10px;
}
</style>
