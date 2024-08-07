<template>
  <h1>Contact Us</h1>
  <div class="container">
    <form action="action_page.php">
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
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<style scoped>
form {
  text-align: left;
  border: white 1px solid;
  border-radius: 5px;
  padding: 10px;
  margin: 15px;
}

.submit {
  text-align: center;
}
input[type="text"],
select,
textarea {
  background-color: white;
  color: black;
  width: 100%;
  /* Full width */
  padding: 12px;
  /* Some padding */
  border: 1px solid #ccc;
  /* Gray border */
  border-radius: 5px;
  /* Rounded borders */
  box-sizing: border-box;
  /* Make sure that padding and width stays in place */
  margin-top: 6px;
  /* Add a top margin */
  margin-bottom: 16px;
  /*Bottom margin */
  resize: vertical;
  /* Allow the user to vertically resize the textarea (not horizontally) */
}

input[type="submit"] {
  background-color: var(--primary-color);
  color: black;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type="submit"]:hover {
  background-color: var(--secondary-color);
}

.container {
  border-radius: 5px;
  margin-left: 5%;
  padding: 20px;
  max-width: 45%;
}
@media screen and (max-width: 700px) {
  .container {
    min-width: 85%;
    margin: auto;
  }
}
</style>
