import React from "react";
import starIcon from "../../assets/images/star-icon.svg";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const Card = ({ dishObj }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addItem(dishObj))
  }
  return (
    <section className="relative w-5/6 h-[60vh] md:w-4/6 lg:w-[20vw] lg:h-[50vh] lg:flex lg:flex-col lg:items-left rounded-lg p-1 hover:border-2 hover:border-gray-500">
      <img
        src={dishObj?.image}
        alt={dishObj?.name}
        className="w-full h-[60%]"
      />
      <section className="flex flex-col justify-start items-left p-1 text-normal border-2 border-gray-400 rounded-lg">
        <span className="flex justify-between">
          <span className="font-semibold text-xl">{dishObj?.name}</span>
          <span className="rounded-lg flex items:center p-1 bg-green-400 ">
            <span className="font-semibold text-xl">{dishObj?.rating}</span>
            <span>
              <img src={starIcon} alt="star icon" />
            </span>
          </span>
        </span>
        <span>{dishObj.chef}</span>
        <span className="flex justify-between">
          <span>{dishObj.category}</span>
          <span>{dishObj.type}</span>
        </span>
        <span className="flex justify-between">
          <span>&#36;{dishObj.price}</span>
          <span>{dishObj.delivery_time} min</span>
        </span>
      </section>
      <button className="absolute bottom-4 left-[25%] lg:-bottom-3 px-6 py-3 bg-orange-500 self-center rounded-full text-white font-semibold" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </section>
  );
};

export default Card;
