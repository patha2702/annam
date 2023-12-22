import React, { useState } from "react";
import logoIcon from "../../assets/images/logo.svg";
import menuIcon from "../../assets/images/menu.svg";
import closeIcon from "../../assets/images/close.svg";

const Header = () => {
  const [menuStatus, setMenuStatus] = useState("hidden");
  return (
    <header className="container flex justify-between align-center px-2 py-1.5">
      <img src={logoIcon} alt="Annam logo" className="w-16"/>
      <nav className={`${menuStatus} absolute top-0 right-0 w-1/2 h-screen bg-gray-400 px-2 py-3`}>
        <img
          src={closeIcon}
          alt="close icon"
          className="w-12 ml-auto mr-0"
          onClick={() => {
            setMenuStatus((prevStatus) => {
              return (prevStatus === "hidden") ? '' : "hidden"
            });
          }}
        />
        <ul className="flex flex-col justify-around align-start pt-4">
          <li className="font-semibold text-lg border-b-2 border-black-500 py-1">Today Special Offers</li>
          <li className="font-semibold text-lg border-b-2 border-black-500 py-1">Why Annam</li>
          <li className="font-semibold text-lg border-b-2 border-black-500 py-1">Our Menu</li>
          <li className="font-semibold text-lg border-b-2 border-black-500 py-1">Cart</li>
          <li className="font-semibold text-lg py-1">
            <button className="rounded-lg bg-orange-600 py-2 px-4 text-lg font-semibold">Sign in</button>
          </li>
        </ul>
      </nav>
      <img
        src={menuIcon}
        alt="menu icon"
        onClick={() => {
          setMenuStatus((prevStatus) => {
            return (prevStatus === "hidden") ? "" : "hidden"
          });
        }}
        className={`w-12 ${(menuStatus === "hidden")? "" : "hidden"}`}
      />
    </header>
  );
};

export default Header;
