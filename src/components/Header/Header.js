import React, { useState } from "react";
import "./Header.css";
import logoIcon from "../../assets/images/logo.svg";
import menuIcon from "../../assets/images/menu.svg";
import closeIcon from "../../assets/images/close.svg";

const Header = () => {
  const [menuStatus, setMenuStatus] = useState("hidden");
  return (
    <header className="header">
      <img src={logoIcon} alt="Annam logo" className="logo" />
      <nav className={`nav-bar ${menuStatus}`}>
        <img
          src={closeIcon}
          alt="close icon"
          className={`close-icon`}
          onClick={() => {
            setMenuStatus((prevStatus) => {
              return (prevStatus === "hidden") ? '' : "hidden"
            });
          }}
        />
        <ul className="nav-list">
          <li className="nav-item">Today Special Offers</li>
          <li className="nav-item">Why Annam</li>
          <li className="nav-item">Our Menu</li>
          <li className="nav-item">Cart</li>
          <li className="nav-item">
            <button className="btn">Sign in</button>
          </li>
        </ul>
      </nav>
      <img
        src={menuIcon}
        alt="menu icon"
        className={`menu-icon`}
        onClick={() => {
          setMenuStatus((prevStatus) => {
            return (prevStatus === "hidden") ? '' : "hidden"
          });
        }}
      />
    </header>
  );
};

export default Header;
