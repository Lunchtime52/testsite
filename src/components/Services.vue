<template>
  <h2>Serivces</h2>
  <div class="row">
    <div class="column">
      <div class="card">
        <h4>Windshield Repair</h4>
        <p>Explain benefits of repair over replacement for minor cracks or chips.</p>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <h4>Windshield Replacement</h4>
        <p>Emphasize safety and using high-quality materials.</p>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <h4>Mobile Service</h4>
        <p>Promote the convenience of getting repairs done at your location.</p>
      </div>
    </div>
  </div>


</template>

<style scoped>
.column {
  width: 25%;
  padding: 0 10px;
  color: white;
  margin-bottom: 20px;
}

/* Remove extra left and right margins, due to padding in columns */
.row {
  /* margin: 20px 5px; */
  justify-content: center;
  display: flex;
}

/* Clear floats after the columns */
/* .row:after {
  content: "";
  display: table;
  clear: both;
} */

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #E4CC37;
  min-height: 175px;
  border-radius: 10px;
  color: black;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
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
