<template>
  <h2>Serivces</h2>
  <div class="row">
    <div class="column">
      <div class="card">
        <h4>Windshield Repair</h4>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <h4>Windshield Replacement</h4>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <h4>Rock Chip Repair</h4>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="column">
      <div class="card">
        <h4>Auto Glass Repair</h4>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <h4>Auto Glass Replacement</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
  color: black;

}

/* Remove extra left and right margins, due to padding in columns */
.row {
  margin: 20px 5px;
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
  background-color: #f1f1f1;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
</style>