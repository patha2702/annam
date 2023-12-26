import React, { useState } from "react";
import logoIcon from "../../assets/images/logo.png";
import menuIcon from "../../assets/images/menu.svg";
import closeIcon from "../../assets/images/close.svg";
import revealUrl from "../../assets/audio/reveal.mp3";
import closeUrl from "../../assets/audio/disappear.mp3";

const Header = () => {
  const [menuStatus, setMenuStatus] = useState("hidden");
  const revealMenu = new Audio(revealUrl);
  const closeMenu = new Audio(closeUrl);

  return (
    <div>
      <header className="lg:hidden flex justify-between align-center px-2 md:px-8 py-3 md:py-10 bg-gray-200">
        <img
          src={logoIcon}
          alt="Annam logo"
          className="w-4/6 md:w-3/6 lg:w-2/6"
        />

        <nav
          className={`${menuStatus} absolute top-0 right-0 w-1/2 h-screen bg-gray-400 px-2 md:px-6 py-3 md:py-12 lg:hidden`}
        >
          <img
            src={closeIcon}
            alt="close icon"
            className="w-12 ml-auto mr-0"
            onClick={() => {
              closeMenu.play();
              setMenuStatus((prevStatus) => {
                return prevStatus === "hidden" ? "" : "hidden";
              });
            }}
          />
          <ul className="flex flex-col justify-around align-start pt-4 md:pt-8">
            <li className="font-semibold text-lg md:text-2xl border-b-2 border-black-500 p-2 md:p-4">
              Today Special Offers
            </li>
            <li className="font-semibold text-lg md:text-2xl border-b-2 border-black-500 p-2 md:p-4">
              Why Annam
            </li>
            <li className="font-semibold text-lg md:text-2xl border-b-2 border-black-500 p-2 md:p-4">
              Our Menu
            </li>
            <li className="font-semibold text-lg md:text-2xl border-b-2 border-black-500 p-2 md:p-4">
              Cart
            </li>
            <li className="font-semibold text-lg p-2 md:p-4">
              <button className="w-full rounded-lg bg-orange-600 py-2 md:py-4 px-4 md:px-8 text-lg md:text-2xl font-semibold">
                Sign in
              </button>
            </li>
          </ul>
        </nav>
        <img
          src={menuIcon}
          alt="menu icon"
          onClick={() => {
            revealMenu.play();
            setMenuStatus((prevStatus) => {
              return prevStatus === "hidden" ? "" : "hidden";
            });
          }}
          className={`${
            menuStatus === "hidden" ? "" : "hidden"
          } w-12 lg:hidden`}
        />
      </header>

      <header className="hidden lg:flex lg:justify-between lg:items-center lg:gap-[5%] lg:bg-gray-200 lg:h-[15vh] lg:py-[4vh] lg:px-[1.5vw]">
        <img src={logoIcon} />
        <nav>
          <ul className="flex justify-around items-center gap-[4vw] text-xl">
            <li>Today Special Offers</li>
            <li>Why Annam</li>
            <li>Our Menu</li>
            <li>Cart</li>
            <li>
              <button className="px-4 py-2 text-lg rounded-full bg-orange-500 text-white font-semibold">Sign in</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
