import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import searchIcon from "../assets/images/search-icon.svg";
import data from "../utils/data.json";
import Card from "./Card/Card";

const Dish = () => {
  const { dishId } = useParams();
  const [inputDish, setInputDish] = useState(dishId);
  const [dishes, setDishes] = useState([]);
  const [cacheDishes, setCacheDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await res.json();
    setDishes(data);
    setCacheDishes(data);
    setFilteredDishes(data)
  };

  return (
    <section className="px-2.5 md:px-8 py-2 md:py-10 lg:py-5 lg:px-[1.5vw]">
      <section className="py-4 md:py-6 lg:py-4 flex flex-col justify-around items-start gap-6 md:gap-8 lg:gap-4">
        <h3 className="text-5xl md:text-6xl font-medium leading-snug md:leading-normal text-center">
          <span className="text-orange-500">Menu</span> That{" "}
          <span className="text-yellow-400">Always</span> Make You Fall In{" "}
          <span className="text-orange-500">Love</span>
        </h3>
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
          <button
            className="bg-yellow-500 rounded-full p-1 md:p-2"
            onClick={() => {
              const dishesFiltered = cacheDishes.filter((dish) => {
                return dish.name
                  .toLowerCase()
                  .includes(inputDish.toLowerCase());
              });
              setFilteredDishes(dishesFiltered);
            }}
          >
            <img
              src={searchIcon}
              alt="search icon"
              className="w-8 h-8 md:w-14 md:h-14"
            />
          </button>
        </div>
        <ul className="flex justify-evenly items-center gap-2 md:gap-6 md:py-4 flex-wrap">
          <li
            className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium cursor-pointer"
            onClick={() => {
              const dishesFiltered = cacheDishes.filter((dish) => {
                return dish.rating >= 4.5;
              });
              setFilteredDishes(dishesFiltered);
            }}
          >
            Rating 4.5+
          </li>
          <li
            className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium cursor-pointer"
            onClick={() => {
              const dishesFiltered = cacheDishes.filter((dish) => {
                return dish.rating >= 4.0;
              });
              setFilteredDishes(dishesFiltered);
            }}
          >
            Rating 4.0+
          </li>
          <li
            className="px-2 md:px-6 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium cursor-pointer"
            onClick={() => {
              const dishesFiltered = cacheDishes.filter((dish) => {
                return dish?.category?.toLowerCase() === "veg";
              });
              setFilteredDishes(dishesFiltered);
            }}
          >
            Veg
          </li>
          <li
            className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium cursor-pointer"
            onClick={() => {
              const dishesFiltered = cacheDishes.filter((dish) => {
                return dish?.category?.toLowerCase() === "non-veg";
              });
              setFilteredDishes(dishesFiltered);
            }}
          >
            Non-Veg
          </li>
          <li
            className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium cursor-pointer"
            onClick={() => {
              const dishesFiltered = cacheDishes.filter((dish) => {
                return dish?.type?.toLowerCase() === "breakfast";
              });
              setFilteredDishes(dishesFiltered);
            }}
          >
            Breakfast
          </li>
          <li
            className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium cursor-pointer"
            onClick={() => {
              const dishesFiltered = cacheDishes.filter((dish) => {
                return dish?.type?.toLowerCase() === "lunch";
              });
              setFilteredDishes(dishesFiltered);
            }}
          >
            Lunch
          </li>
          <li
            className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium cursor-pointer"
            onClick={() => {
              const dishesFiltered = cacheDishes.filter((dish) => {
                return dish?.type?.toLowerCase() === "dinner";
              });
              setFilteredDishes(dishesFiltered);
            }}
          >
            Dinner
          </li>
          <li
            className="px-2 md:px-4 py-1 md:py-2 rounded-full bg-orange-500 text-white md:text-xl font-medium cursor-pointer"
            onClick={() => {
              const dishesFiltered = cacheDishes.filter((dish) => {
                return dish?.price <= 50;
              });
              setFilteredDishes(dishesFiltered);
            }}
          >
            Below $50
          </li>
        </ul>
        <section className="py-4 lg:py-2 flex justify-left items-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
          {filteredDishes.map((filteredDish, index) => {
            return <Card dishObj={filteredDish} key={index} />;
          })}
        </section>
      </section>
    </section>
  );
};

export default Dish;
