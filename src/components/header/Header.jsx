import React from "react";
import "./header.css";

const header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.htlm" className="nav__logo">
          Musarurwa
        </a>

        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default header;
