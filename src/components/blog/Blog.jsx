import React from "react";
import "./blog.css";
import Gbr1 from "../../assets/blog1.svg";
import Gbr2 from "../../assets/blog2.svg";
import Gbr3 from "../../assets/blog3.svg";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Hot News</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Update</span>
            </a>
            <a href="#">
              <img src={Gbr1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Rancangan Aplikasi Bus Mabour</h3>
            <div className="blog__meta">
              10 Desember, 2022
              <span></span>
              <span className="blog__dot">.</span>
              <span>Sevyra</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Issues</span>
            </a>
            <a href="#">
              <img src={Gbr2} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Pembayaran Bus Mabour Gratis</h3>
            <div className="blog__meta">
              09 Desember, 2022
              <span></span>
              <span className="blog__dot">.</span>
              <span>Sevyra</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Business</span>
            </a>
            <a href="#">
              <img src={Gbr3} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Pengembangan Aplikasi Bus Mabour</h3>
            <div className="blog__meta">
              07 Desember, 2022
              <span></span>
              <span className="blog__dot">.</span>
              <span>Sevyra</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
