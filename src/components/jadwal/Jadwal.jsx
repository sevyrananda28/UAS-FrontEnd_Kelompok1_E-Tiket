import React from "react";
import "./jadwal.css";
import Data from "./Data";
import Card from "./Card";

const Jadwal = () => {
  return (
    <section className="jadwal container section" id="jadwal">
      <h2 className="section__title">Jadwal Keberangkatan</h2>

      <div className="jadwal__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "ts1") {
              return <Card key={id} icon={val.icon} title={val.title} desc={val.desc} />;
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "ts2") {
              return <Card key={index} icon={val.icon} title={val.title} desc={val.desc} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Jadwal;
