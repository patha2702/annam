import React from "react";
import starIcon from "../../assets/images/star-icon.svg";

const Card = () => {
  return (
    <section className="w-5/6 md:w-4/6 lg:w-1/6 lg:flex lg:flex-col lg:items-center rounded-b-lg rounded-t-full p-4 bg-gradient-to-b from-orange-500 via-white to-gray-500">
      <div className="p-4 lg:p-2 lg:w- bg-white rounded-full">
        <img
          src="https://joyfoodsunshine.com/wp-content/uploads/2022/06/chicken-kebabs-recipe-1.jpg"
          alt="#"
          className="rounded-full lg:w-full"
        />
      </div>
      <div className="flex flex-col justify-around items-center gap-4 md:gap-6 lg:gap-1 pt-2 md:pt-4 lg:pt-2">
        <span className="block flex gap-2 md:gap-2 lg:gap-1 text-3xl md:text-5xl lg:text-3xl font-bold">
          &#36;<span>130</span>
        </span>
        <span className="block flex gap-2 items-center text-xl md:text-2xl lg:text-xl font-bold">
          Rating <img src={starIcon} alt="#" />
          (4.5)
        </span>
        <span className="text-xl md:text-3xl lg:text-xl font-bold text-orange-600">Kebab</span>
        <div className="leading-normal lg:leading-tight text-center md:text-2xl lg:text-sm md:py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto
          iste debitis autem dolore numquam!
        </div>
        <button className="px-4 md:px-10 lg:px-4 py-2 md:py-4 lg:py-2 rounded-full bg-orange-500 text-xl md:text-2xl lg:text-base font-semibold text-white">Order Now</button>
      </div>
    </section>
  );
};

export default Card;
