import React from "react";

export default function ContactPage() {
  return (
    <section className="bg-green-800">
      <h1>So, Lets hear about your project!</h1>
      <p>I'm free to contact using the resources down below</p>
      <label for="fname">Name:</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Your Email.." />
      <br />
      <label for="textarea">Message:</label>
      <input
        type="textarea"
        id="textarea"
        name="textarea"
        placeholder="Your name.."
      />
    </section>
  );
}
