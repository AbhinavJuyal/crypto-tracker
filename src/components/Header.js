import React from "react";
import "./Header.css";
import Logo from '../img/robinhood.svg'

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo} width={25} alt=""/>
      </div>
      <div className="header__search">
          <input className="header__search__input" placeholder="Search" type="text" />
      </div>
      <div className="header__menuItems">
        <a href="/">Free Stocks</a>
        <a href="/">PortFolio</a>
        <a href="/">Cash</a>
        <a href="/">Messages</a>
        <a href="/">Account</a>
      </div>
    </div>
  );
}

export default Header;

// https://material-ui.com/components/material-icons/