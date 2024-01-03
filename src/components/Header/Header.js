import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/images/logo.png";
import menuIcon from "../../assets/images/menu.svg";
import closeIcon from "../../assets/images/close.svg";
import revealUrl from "../../assets/audio/reveal.mp3";
import closeUrl from "../../assets/audio/disappear.mp3";
import { useSelector } from "react-redux";

const Header = () => {
  const [menuStatus, setMenuStatus] = useState("hidden");
  const revealMenu = new Audio(revealUrl);
  const closeMenu = new Audio(closeUrl);
  const cart = useSelector((state) => state.cart.items);
  
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
            <li className="font-semibold text-lg md:text-2xl border-b-2 border-black-500 p-2 md:p-4 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold text-lg md:text-2xl border-b-2 border-black-500 p-2 md:p-4 cursor-pointer">
              <Link to="/offers">Today Special Offers</Link>
            </li>
            <li className="font-semibold text-lg md:text-2xl border-b-2 border-black-500 p-2 md:p-4 cursor-pointer">
              <Link to="/about">Why Annam</Link>
            </li>
            <li className="font-semibold text-lg md:text-2xl border-b-2 border-black-500 p-2 md:p-4 cursor-pointer">
              <Link to="/menu">Our Menu</Link>
            </li>
            <li className="font-semibold text-lg md:text-2xl border-b-2 border-black-500 p-2 md:p-4 cursor-pointer">
              <Link to="/cart">Cart ({cart.length})</Link>
            </li>
            <li className="font-semibold text-lg p-2 md:p-4">
              <Link to="/sign-in">
                <button className="w-full rounded-lg bg-orange-600 py-2 md:py-4 px-4 md:px-8 text-lg md:text-2xl font-semibold">
                  Sign in
                </button>
              </Link>
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
        <Link to="/">
          <img src={logoIcon} />
        </Link>
        <nav>
          <ul className="flex justify-around items-center gap-[4vw] text-xl">
            <li className="cursor-pointer">
              <Link to="/offers">Today Special Offers</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/about">Why Annam</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/menu">Our Menu</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/cart">Cart ({cart.length})</Link>
            </li>
            <li>
              <Link to="/sign-in">
                <button className="px-4 py-2 text-lg rounded-full bg-orange-500 text-white font-semibold">
                  Sign in
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
