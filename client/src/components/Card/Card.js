import React from "react";
import starIcon from "../../assets/images/star-icon.svg";

const Card = () => {
  return (
    <section className="w-5/6 rounded-b-lg rounded-t-full p-4 bg-gradient-to-b from-orange-500 via-white to-gray-500">
      <div className="p-4 bg-white rounded-full">
        <img
          src="https://joyfoodsunshine.com/wp-content/uploads/2022/06/chicken-kebabs-recipe-1.jpg"
          alt="#"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-around items-center gap-4 pt-2">
        <span className="block flex gap-2 text-3xl font-bold">
          &#36;<span>130</span>
        </span>
        <span className="block flex gap-2 items-center text-xl font-bold">
          Rating <img src={starIcon} alt="#" />
          (4.5)
        </span>
        <span className="text-xl font-bold text-orange-600">Kebab</span>
        <div className="leading-normal text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto
          iste debitis autem dolore numquam!
        </div>
        <button className="px-4 py-2 rounded-full bg-orange-500 text-xl font-semibold text-white">Order Now</button>
      </div>
    </section>
  );
};

export default Card;
