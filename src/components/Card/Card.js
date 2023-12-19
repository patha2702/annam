import React from "react";
import "./Card.css"

const Card = () => {
    return (
        <section>
            <img src="#" alt="#" />
            <span>&#36;<span>30</span></span>
            <span>Rating <img src="#" alt="#" />(4.5)</span>
            <span>Kebab</span>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto 
                iste debitis autem dolore numquam!
            </div>
            <button>Order Now</button>
        </section>
    )
}

export default Card