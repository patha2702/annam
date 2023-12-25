import React from "react";
import Card from "../Card/Card";
import searchIcon from "../../assets/images/search-icon.svg";
import homeImage from "../../assets/images/home-image.png"

const Main = () => {
  return (
    <main className="container px-2.5 md:px-8 py-2 md:py-10">
      <section className="py-4">
        <section className="flex flex-col justify-around align-start py-4 gap-4 md:gap-6">
          <span className="rounded-full w-max md:text-xl md:font-normal bg-gray-200 py-0.5 md:py-1 px-2 md:px-4">
            People Trust us
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-snug">
            We're <span className="text-orange-500">Serious</span> For <span className="text-orange-500">Food</span> &amp; <span className="text-yellow-400">Delivery</span>
          </h1>
          <p className="leading-normal md:text-2xl md:py-4">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes
          </p>
          <div className="rounded-full flex justify-between align-center border-2 p-1 md:p-2 border-gray-300">
            <div className="p-1 md:p-2">
              <img src={searchIcon} alt="search icon" className="w-8 h-8 md:w-14 md:h-14" />
            </div>
            <input
              type="text"
              placeholder="Search food"
              className="text-gray-700 text-lg md:text-3xl block md:w-2/3"
            />
            <button className="bg-yellow-500 rounded-full p-1 md:p-2">
              <img src={searchIcon} alt="search icon" className="w-8 h-8 md:w-14 md:h-14" />
            </button>
          </div>
        </section>
        <section className="hidden">
          <img src="#" alt="#" className="main-image" />
        </section>
      </section>
      <section className="py-4 md:py-6 flex flex-col justify-around gap-4">
        <h3 className="text-5xl md:text-6xl font-medium leading-snug text-center">
          Today <span className="text-orange-500">Special</span> Offers
        </h3>
        <p className="leading-normal px-3 text-center md:text-2xl md:py-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque hic
          quo veritatis error sapiente voluptatibus rem debitis consequuntur,
          neque quas totam quisquam perferendis dolorem? Tempora natus
          laboriosam at obcaecati commodi
        </p>
        <section className="py-4 md:py-6 flex justify-center items-center">
          <Card />
        </section>
      </section>
      <section className="flex flex-col justify-around gap-4 md:py-6">
        <img
          src={homeImage}
          alt="#"
          className="w-full rounded-lg border-2 border-gray-500"
        />

        <section className="py-4 md:py-8 flex flex-col justify-around items-start gap-6 md:gap-10">
          <h3 className="text-5xl md:text-6xl font-medium leading-snug md:leading-normal">
            We are <span className="text-orange-500">more</span> than <span className="text-yellow-400">multiple</span> service
          </h3>
          <p className="leading-normal py-2 md:text-2xl md:py-4">
            This is a type of resturant which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes frome the rench word meaning food
          </p>

          <ul className="flex flex-col justify-around items-start gap-2 md:text-2xl">
            <li className="flex gap-2">
              <img src="#" alt="#" /> <span>Online Order</span>
            </li>
            <li className="flex gap-2">
              <img src="#" alt="#" /> <span>Pre-Reservation</span>
            </li>
            <li className="flex gap-2">
              <img src="#" alt="#" /> <span>Super Chef</span>
            </li>
            <li className="flex gap-2">
              <img src="#" alt="#" /> <span>24/7 Service</span>
            </li>
            <li className="flex gap-2">
              <img src="#" alt="#" /> <span>Organized Annam Place</span>
            </li>
            <li className="flex gap-2">
              <img src="#" alt="#" /> <span>Clean Kitchen</span>
            </li>
          </ul>

          <button className="rounded-full px-10 md:px-16 py-3 md:py-6 text-white text-lg md:text-3xl font-semibold bg-orange-500">About Us</button>
        </section>
      </section>
      <section className="py-4 md:py-6 flex flex-col justify-around items-start gap-6 md:gap-8">
        <h3 className="text-5xl md:text-6xl font-medium leading-snug md:leading-normal text-center">
        <span className="text-orange-500">Menu</span> That <span className="text-yellow-400">Always</span> Make You Fall In <span className="text-orange-500">Love</span>
        </h3>
        <ul className="flex justify-evenly items-center gap-2 md:gap-6 md:py-4 flex-wrap">
          <li className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium">Ramen</li>
          <li className="px-2 md:px-6 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium">Breakfast</li>
          <li className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium">Lunch</li>
          <li className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium">Dinner</li>
          <li className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium">South Indian</li>
          <li className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium">North Indian</li>
          <li className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium">Desserts</li>
          <li className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium">Drinks</li>
        </ul>
        <section className="py-4 flex justify-center items-center">
          <Card />
        </section>
      </section>
    </main>
  );
};

export default Main;
