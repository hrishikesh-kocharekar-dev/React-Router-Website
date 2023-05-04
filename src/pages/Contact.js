import React from "react";
import PizzaLeft from "../assets/contactPiz.jpg";
import "..//styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Your name</label>
          <input
            name="name"
            placeholder="Please Enter Your name..."
            type="text"
          />
          <label htmlFor="email"> Email</label>
          <input
            name="email"
            placeholder="Please Enter Your email..."
            type="email"
          />
          <label htmlFor="message"> Message </label>
          <textarea
            rows={6}
            placeholder="Enter Message.. "
            name="message"
            required
          ></textarea>
          <button>Send Message </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
