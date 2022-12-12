import React from "react";
import "./about.css";
import Image from "../../assets/avatar2.png";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Mabour</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              E-Tiket Mabour atau Madiun Bus On Tour merupakan platform reservasi online bus tour yang ada di Kota Madiun. Tiket ini gratis dan bisa reservasi kapan saja dan dimana saja tanpa harus menunggu kedatangan bus seperti
              sebelumnya.
            </p>
            <a href="#contact" className="btn">
              Reservasi Sekarang
            </a>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
