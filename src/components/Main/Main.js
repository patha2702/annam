import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import data from "../../utils/data.json";
import searchIcon from "../../assets/images/search-icon.svg";
import homeImage from "../../assets/images/home-image.png";
import mainImage from "../../assets/images/main-image.jpg";

const Main = () => {
  const [cacheDishes, setCacheDishes] = useState([]);
  const [inputDish, setInputDish] = useState("");
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [specialDishes, setSpecialDishes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterTopDishes();
  }, [cacheDishes])

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await res.json();
    setCacheDishes(data);
  };

  const filterTopDishes = () => {
    const topDishes = cacheDishes.filter((dish) => {
      return dish.rating >= 4.8;
    });
    setSpecialDishes(topDishes);
  };

  return (
    <main className="px-2.5 md:px-8 py-2 md:py-10 lg:py-5 lg:px-[1.5vw]">
      <section className="py-4 lg:flex lg:justify-between lg:items-center lg:py-8">
        <section className="flex flex-col justify-around align-start gap-4 md:gap-6 lg:gap-4 lg:w-1/2 lg:py-8">
          <span className="rounded-full w-max md:text-xl md:font-normal bg-gray-200 py-0.5 md:py-1 px-2 md:px-4">
            People Trust us
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-snug">
            We're <span className="text-orange-500">Serious</span> For{" "}
            <span className="text-orange-500">Food</span> &amp;{" "}
            <span className="text-yellow-400">Delivery</span>
          </h1>
          <p className="leading-normal md:text-2xl md:py-4">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes
          </p>
          <div className="rounded-full flex justify-between align-center border-2 p-1 md:p-2 border-gray-300 lg:w-5/6">
            <div className="p-1 md:p-2">
              <img
                src={searchIcon}
                alt="search icon"
                className="w-8 h-8 md:w-14 md:h-14"
              />
            </div>
            <input
              type="text"
              placeholder="Search food"
              className="text-gray-700 text-lg md:text-3xl block md:w-2/3"
              value={inputDish}
              onChange={(event) => {
                setInputDish(event.target.value);
              }}
            />
            <Link
              className="bg-yellow-500 rounded-full p-1 md:p-2"
              to={`/menu/${inputDish}`}
            >
              <img
                src={searchIcon}
                alt="search icon"
                className="w-8 h-8 md:w-14 md:h-14"
              />
            </Link>
          </div>
        </section>
        <section className="hidden lg:block lg:w-1/2 lg:p-6 lg:m-auto lg:bg-gray-400">
          <img
            src={mainImage}
            alt="a happy girl eating something"
            className="w-full"
          />
        </section>
      </section>

      <section className="py-4 md:py-6 flex flex-col justify-around gap-4">
        <h3 className="text-5xl md:text-6xl font-medium leading-snug text-center">
          Today <span className="text-orange-500">Special</span> Offers
        </h3>
        <p className="leading-normal px-3 text-center md:text-2xl lg:text-xl md:py-6 lg:py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque hic
          quo veritatis error sapiente voluptatibus rem debitis consequuntur,
          neque quas totam quisquam perferendis dolorem? Tempora natus
          laboriosam at obcaecati commodi
        </p>
        <section className="py-4 lg:py-2 flex justify-left items-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
          {specialDishes.map((dish, index) => {
            return <Card dishObj={dish} key={index} />;
          })}
        </section>
      </section>
      <section className="flex flex-col lg:flex-row justify-around lg:justify-between lg:items-center gap-4 lg:gap-8 md:py-6 lg:py-8">
        <img
          src={homeImage}
          alt="#"
          className="w-full rounded-lg border-2 border-gray-500 lg:w-1/2 lg:p-6 lg:m-auto lg:bg-gray-400"
        />

        <section className="py-4 md:py-8 flex flex-col justify-around items-start gap-6 md:gap-10 lg:gap-12 lg:w-1/2 lg:py-8">
          <h3 className="text-5xl md:text-6xl font-medium leading-snug md:leading-normal lg:leading-tight">
            We are <span className="text-orange-500">more</span> than{" "}
            <span className="text-yellow-400">multiple</span> service
          </h3>
          <p className="leading-normal py-2 md:text-2xl lg:text-xl md:py-4">
            This is a type of resturant which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes frome the rench word meaning food
          </p>

          <ul className="flex flex-col lg:flex-row justify-around lg:justify-start lg:flex-wrap items-start gap-2 lg:gap-4 md:text-2xl lg:text-xl">
            <li className="flex gap-2 lg:w-[40%]">
              <img src="#" alt="#" /> <span>Online Order</span>
            </li>
            <li className="flex gap-2 lg:w-[40%]">
              <img src="#" alt="#" /> <span>Pre-Reservation</span>
            </li>
            <li className="flex gap-2 lg:w-[40%]">
              <img src="#" alt="#" /> <span>Super Chef</span>
            </li>
            <li className="flex gap-2 lg:w-[40%]">
              <img src="#" alt="#" /> <span>24/7 Service</span>
            </li>
            <li className="flex gap-2 lg:w-[40%]">
              <img src="#" alt="#" /> <span>Organized Annam Place</span>
            </li>
            <li className="flex gap-2 lg:w-[40%]">
              <img src="#" alt="#" /> <span>Clean Kitchen</span>
            </li>
          </ul>

          <button className="rounded-full px-10 md:px-16 lg:px-12 py-3 md:py-6 lg:py-4 text-white text-lg md:text-3xl lg:text-xl font-semibold bg-orange-500">
            About Us
          </button>
        </section>
      </section>
    </main>
  );
};

export default Main;
