import React, { useState } from "react";
import logoIcon from "../../assets/images/logo.png";
import menuIcon from "../../assets/images/menu.svg";
import closeIcon from "../../assets/images/close.svg";
import revealUrl from "../../assets/audio/reveal.mp3"
import closeUrl from "../../assets/audio/disappear.mp3"

const Header = () => {
  const [menuStatus, setMenuStatus] = useState("hidden");
  const revealMenu = new Audio(revealUrl)
  const closeMenu = new Audio(closeUrl)
 
  return (
    <header className="container flex justify-between align-center px-2 md:px-8 py-3 md:py-10 bg-gray-200">
      <img src={logoIcon} alt="Annam logo" className="w-4/6 md:w-3/6"/>
      <nav className={`${menuStatus} absolute top-0 right-0 w-1/2 h-screen bg-gray-400 px-2 md:px-6 py-3 md:py-12`}>
        <img
          src={closeIcon}
          alt="close icon"
          className="w-12 ml-auto mr-0"
          onClick={() => {
            closeMenu.play()
            setMenuStatus((prevStatus) => {
              return (prevStatus === "hidden") ? '' : "hidden"
            });
          }}
        />
        <ul className="flex flex-col justify-around align-start pt-4 md:pt-8">
          <li className="font-semibold text-lg md:text-2xl border-b-2 border-black-500 p-2 md:p-4">Today Special Offers</li>
          <li className="font-semibold text-lg md:text-2xl border-b-2 border-black-500 p-2 md:p-4">Why Annam</li>
          <li className="font-semibold text-lg md:text-2xl border-b-2 border-black-500 p-2 md:p-4">Our Menu</li>
          <li className="font-semibold text-lg md:text-2xl border-b-2 border-black-500 p-2 md:p-4">Cart</li>
          <li className="font-semibold text-lg p-2 md:p-4">
            <button className="w-full rounded-lg bg-orange-600 py-2 md:py-4 px-4 md:px-8 text-lg md:text-2xl font-semibold">Sign in</button>
          </li>
        </ul>
      </nav>
      <img
        src={menuIcon}
        alt="menu icon"
        onClick={() => {
          revealMenu.play()
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
