import React from "react";
import "./home.css";
import Me from "../../assets/avatar.png";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">E-Tiket "Mabour"</h1>
        <span className="home__education">Madiun Bus on Tour</span>
      </div>
    </section>
  );
};

export default Home;
