import React from "react";
import ManyPizza from "../assets/manyPiz.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop "
        style={{ backgroundImage: `url(${ManyPizza})` }}
      ></div>
      <div className="aboutBottom">
        <h1 className="aboutH1">ABOUT US</h1>
        <h3 className="aboutH2">Meet the pizza lovers behind our delicious pies! We're a team of passionate foodies dedicated to bringing you the best pizza experience. From our talented chefs to our friendly servers, we're here to make sure you leave with a full stomach and a happy heart. Come visit
         us and taste the love we put into every slice.</h3>
       
      </div>
    </div>
  );
};

export default About;
