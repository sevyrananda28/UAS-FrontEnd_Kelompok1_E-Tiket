import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">100</h3>
          <span className="about__title">Popularity</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-heart"></i>

        <div>
          <h3 className="about__title">80</h3>
          <span className="about__title">Interest</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-plane"></i>

        <div>
          <h3 className="about__title">95</h3>
          <span className="about__title">Recommended</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__title">80</h3>
          <span className="about__title">Connection</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
