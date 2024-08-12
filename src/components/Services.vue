<template>
  <h2>Serivces</h2>
  <!-- Main heading for the services section -->
  <div class="row">
    <!-- Container for the service cards -->
    <div class="column">
      <!-- Individual service column -->
      <div class="card">
        <h4>Windshield Repair</h4>
        <!-- Title of the service -->
        <!-- Service card container -->
        <img  src="../assets/images/broken windshield.png" />
        <!-- Placeholder image for the service -->
        <p>
          Explain benefits of repair over replacement for minor cracks or chips.
          <!-- Description of the service -->
        </p>
      </div>
    </div>
    <div class="column">
      <!-- Individual service column -->
      <div class="card">
        <h4>Door window replacement and repair</h4>
        <!-- Title of the service -->
        <!-- Service card container -->
        <img  src="../assets/images/broken side.png" />
        <!-- Placeholder image for the service -->
        <p>Emphasize safety and using high-quality materials.</p>
        <!-- Description of the service -->
      </div>
    </div>
    <div class="column">
      <!-- Individual service column -->
      <div class="card">
        <h4>Mobile Service</h4>
        <!-- Title of the service -->
        <!-- Service card container -->
        <img src="../assets/images/mobileService.png" />
        <!-- Placeholder image for the service -->
        <p>Promote the convenience of getting repairs done at your location.</p>
        <!-- Description of the service -->
      </div>
    </div>
    <button>Learn More</button>
  </div>
</template>

<style scoped>
.column {
  width: 33%; /* Each column takes 1/3 of the container width */
  padding: 0 10px; /* Adds padding to the left and right of each column */
  color: var(--txtcolor); /* Sets the text color using a CSS variable */
  margin-bottom: 20px; /* Adds bottom margin for spacing between columns */
}
h2 {
  margin: 50px; /* Adds margin around the main heading */
}
img {
  max-width: 15em;
  /* height: auto; */
  /* width: 100%; */
  object-fit: contain; /* Makes the image fit the container while maintaining aspect ratio */
  border-radius: 10px; /* Rounds the corners of the image */
}
/* Remove extra left and right margins, due to padding in columns */
.row {
  justify-content: center; /* Centers the content horizontally */
  display: flex; /* Enables flexbox layout for the row */
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* Adds a subtle shadow effect to the card */
  /* this adds the "card" effect */
  padding: 25px; /* Adds padding around the card content */
  text-align: center; /* Centers the text content within the card */
  background-color: var(
    --secondary-color
  ); /* Sets the background color using a CSS variable */
  min-height: 400px; /* Sets a minimum height for the card */
  border-radius: 10px; /* Rounds the corners of the card */
  color: var(--txtcolor); /* Sets the text color using a CSS variable */
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 950px) {
  .column {
    width: 75%; /* Each column takes 3/4 of the container width on small screens */
    display: block; /* Ensures each column stacks vertically */
  }

  .row {
    display: grid; /* Uses grid layout for better centering on small screens */
    place-items: center; /* Centers the items within the grid */
  }
}
</style>
