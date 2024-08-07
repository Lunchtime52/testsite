<template>
  <h2>Serivces</h2>
  <div class="row">
    <div class="column">
      <div class="card">
        <img src="https://placehold.co/300x250.png">
        <h4>Windshield Repair</h4>
        <p>
          Explain benefits of repair over replacement for minor cracks or chips.
        </p>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <img src="https://placehold.co/300x250.png">
        <h4>Windshield Replacement</h4>
        <p>Emphasize safety and using high-quality materials.</p>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <img src="https://placehold.co/300x250.png">
        <h4>Mobile Service</h4>
        <p>Promote the convenience of getting repairs done at your location.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.column {
  width: 33%;
  padding: 0 10px;
  color: var(--txtcolor);
  margin-bottom: 20px;
}
img{
  /* height: auto; */
  /* width: 100%; */
  object-fit:contain;
  border-radius: 10px;
}
/* Remove extra left and right margins, due to padding in columns */
.row {
  justify-content: center;
  display: flex;
}



/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: var(--secondary-color);
  min-height: 400px;
  border-radius: 10px;
  color: var(--txtcolor);
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 950px) {
  .column {
    width: 75%;
    display: block;
  }

  .row {
    display: grid;
    place-items: center;
  }
}
</style>
