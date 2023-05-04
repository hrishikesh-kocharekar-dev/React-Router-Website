import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "..//assets/pizza1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>It's Not just A Pizza, it's An Experience</h1>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
