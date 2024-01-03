import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemCounter from "../components/ItemCounter";

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <section className="px-2.5 md:px-8 py-2 md:py-10 lg:py-5 lg:px-[1.5vw]">
      <div className="p-2 flex justify-between items-center">
        <h1 className="text-5xl md:text-6xl font-medium leading-snug text-center">
          Your Cart [{cart.length} items]
        </h1>
        <img
          src="https://imgs.search.brave.com/GtmyQBhJJIhIOIej2efiEHKMqxPtQfCw3ZS3ZSY0m3E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92aXN1/YWxwaGFybS5jb20v/YXNzZXRzLzI3MC9D/bGVhciUyMFNob3Bw/aW5nJTIwQ2FydC01/OTViNDBiNzViYTAz/NmVkMTE3ZDZlZjEu/c3Zn.svg"
          className="w-[5%] cursor-pointer hover:border-4 hover:border-gray-500 hover:shadow-lg"
          onClick={()=> {
            handleClearCart()
          }}
        />
      </div>

      <section className="border-b-3 border-gray-400 shadow-lg py-4">
        <div className="rounded-lg flex justify-start items-center font-medium text-2xl py-2 px-3 border-b-3 border-gray-400 shadow-lg">
          <span className="w-[50%] px-2">Item</span>
          <span className="w-[10%] px-2">Price</span>
          <span className="w-[20%] px-2">Quantity</span>
          <span className="w-[10%] px-2">Total</span>
        </div>
        {cart.map((item, index) => {
          return (
            <div
              className="rounded-lg flex justify-start items-center font-medium text-2xl border-b-3 border-gray-400 shadow-lg"
              key={index}
            >
              <div className="w-[50%] flex gap-[1vw] px-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[20%] py-2"
                />
                <div className="flex flex-col justify-center items-baseline">
                  <span className="font-semibold">{item.name}</span>
                  <span>{item.chef}</span>
                </div>
              </div>
              <span className="w-[10%] px-2">&#8377;{item.price}</span>
              <span className="flex w-[20%] px-2">
                <ItemCounter foodItem={item} />
              </span>
              <span className="w-[10%] px-2">
                &#8377;{item.price * item.quantity}
              </span>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Cart;
