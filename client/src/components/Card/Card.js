import React from "react";
import starIcon from "../../assets/images/star-icon.svg"

const Card = () => {
    return (
        <section className="flex flex-col items-center text-center w-80 p-4 rounded-t-165 rounded-b-15 bg-feebeb">
            <div className="card-image-container">
                <img src="https://joyfoodsunshine.com/wp-content/uploads/2022/06/chicken-kebabs-recipe-1.jpg" alt="#" className="card-image"/> 
            </div>
            <div className="card-info-container">
                <span className="card-price-container">&#36;<span className="card-price ">30</span></span>
                <span className="card-rating">Rating <img src={starIcon} alt="#" />(4.5)</span>
                <span className="card-item-name">Kebab</span>
                <div className="card-item-cuisines">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto 
                    iste debitis autem dolore numquam!
                </div>
                <button className="card-btn">Order Now</button>
            </div>
            
        </section>
    )
}

export default Card