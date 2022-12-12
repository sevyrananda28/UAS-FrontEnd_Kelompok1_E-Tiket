import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="aside">
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-info"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#jadwal" className="nav__link">
                <i className="icon-calendar"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#blog" className="nav__link">
                <i className="icon-note"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-bubbles"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; E-Tiket Mabour 2022</span>
      </div>
    </aside>
  );
};

export default Sidebar;
