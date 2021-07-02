import React from "react";
import "./Header.css";
import Logo from "../img/robinhood.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo} width={25} alt="" />
      </div>
      <div className="header__search">
        <input
          className="header__search__input"
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="header__menuItems">
        <Link to="/">Free Stocks</Link>
        <Link to="/portfolio">PortFolio</Link>
        <Link to="/">Cash</Link>
        <Link to="/">Messages</Link>
        <Link to="/acc">Account</Link>
      </div>
    </div>
  );
}

export default Header;
