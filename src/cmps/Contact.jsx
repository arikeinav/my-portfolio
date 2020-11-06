import React from "react";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { init } from "emailjs-com";
init("user_DwELl4XwTINN7NjVkso43");

export function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sn03wmr",
        "template_2acjgim",
        e.target,
        "user_DwELl4XwTINN7NjVkso43"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
      
          
    <form
      className="contact-form"
      onSubmit={sendEmail}
    >
        <h1>Contact me</h1>
      <input type="hidden" name="contact_number" />

      <TextField
        id="outlined-secondary"
        label="Your name"
        variant="outlined"
        color="blue"
        name="name"
        className="input"
        
      />
      <TextField
        id="outlined-secondary"
        label="Email"
        variant="outlined"
        color="blue"
        name="email"
        className="input"
      />

      <TextField
        id="outlined-multiline-static"
        label="Messege"
        multiline
        rows={4}
        variant="outlined"
        name="message"
        className="text"
        color="blue"
      />
      <input type="submit" value="Send" />
    </form>
    
  );
}

