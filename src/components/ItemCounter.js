import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import findItem from "../utils/findItem";

const ItemCounter = ({ foodItem }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <span className="w-1/2 rounded-lg flex justify-around items-center border-2 border-black">
      <span
        className="cursor-pointer"
        onClick={() => {
          handleRemoveItem(foodItem);
        }}
      >
        -
      </span>
      <span className="cursor-pointer">{foodItem.quantity}</span>
      <span
        className="cursor-pointer"
        onClick={() => {
          handleAddItem(foodItem);
        }}
      >
        +
      </span>
    </span>
  );
};

export default ItemCounter;
