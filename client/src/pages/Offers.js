import React, {useState, useEffect} from "react"
import Card from "../components/Card/Card";
import data from "../utils/data.json"

const Offers = () => {

    const [cacheDishes, setCacheDishes] = useState([]);
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
    <section className="px-2.5 md:px-8 py-2 md:py-10 lg:py-5 lg:px-[1.5vw]">
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
    </section>
  );
};

export default Offers;
