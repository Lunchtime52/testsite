<template>
  <h2>Contact Us</h2>
  <div class="container">
    <!-- Container for the form -->
    <form action="action_page.php">
      <!-- Form with action pointing to a backend script -->
      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />

      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />

      <label for="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Your email.." />

      <label for="phone">Phone</label>
      <input
        type="text"
        id="phone"
        name="phone"
        placeholder="Your phone number.."
      />

      <label for="subject">Subject</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
        style="height: 200px"
      ></textarea>
      <div class="submit">
        <!-- Container for the submit button to center it -->
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<style scoped>
form {
  text-align: left;
  border: black 1px solid;
  border-radius: 5px;
  padding: 10px;
  margin: 15px;
  font-size: 1.5rem;
}

.submit {
  text-align: center;
}
input[type="text"],
select,
textarea {
  background-color: white;
  color: black;
  width: 100%; /* Full width input fields */
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; /* Ensures padding and border are included in total width */
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical; /* Allow vertical resizing of textarea */
}

input[type="submit"] {
  background-color: var(--primary-color);
  color: black;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Hover effect for submit button */
input[type="submit"]:hover {
  background-color: var(--secondary-color);
}

.container {
  border-radius: 5px;
  margin-left: 5%;
  padding: 20px;
  max-width: 45%;
}

/* Responsive design for smaller screens */
@media screen and (max-width: 700px) {
  .container {
    min-width: 85%;
    margin: auto; /* Center the container on smaller screens */
  }
}
</style>
