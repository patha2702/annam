import React from "react";
import Card from "../Card/Card";
import searchIcon from "../../assets/images/search-icon.svg"

const Main = () => {
    return (
        <main className="container px-2 py-1.5">
            <section className="py-4">
                <section className="flex flex-col justify-around align-start gap-4">
                    <span className="rounded-full w-max bg-gray-200 py-0.5 px-2">People Trust us</span>
                    <h1 className="text-5xl font-bold leading-snug">We're Serious For Food &amp; delivery</h1>
                    <p className="leading-normal">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes</p>
                    <div className="rounded-full flex justify-between align-center w-full border-2 border-gray-300">
                        <img src={searchIcon} alt="search icon" />
                        <input type="text" placeholder="Search food" className="text-gray-300 text-lg" />
                        <button className="bg-yellow-500 rounded-full w-8"><img src={searchIcon} alt="search icon" className="search-icon" /></button>
                    </div>
                </section>
                <section className="">
                    <img src="#" alt="#" className="main-image"/>
                </section>
            </section>
            <section className="home-section-style align-center">
                <h3 className="section-title">Today Special Offers</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque hic quo veritatis error sapiente 
                    voluptatibus rem debitis consequuntur, neque quas totam quisquam perferendis dolorem? Tempora 
                    natus laboriosam at obcaecati commodi
                </p>
                <section className="card-container">
                        <Card />
                </section>
            </section>
            <section className="home-section-style">
                <section>
                    <img src="#" alt="#" />
                </section>
                <section className="home-section-style">
                    <h3 className="section-title">We are more than multiple service</h3>
                    <p>
                        This is a type of resturant which typically serves food and drink, in addition to light 
                        refreshments such as baked goods or snacks. The term comes frome the rench word 
                        meaning food
                    </p>
                    <section>
                        <ul className="section-specialities">
                            <li><img src="#" alt="#" /> Online Order</li>
                            <li><img src="#" alt="#" /> Pre-Reservation</li>
                            <li><img src="#" alt="#" /> Super Chef</li>
                            <li><img src="#" alt="#" /> 24/7 Service</li>
                            <li><img src="#" alt="#" /> Organized Annam Place</li>
                            <li><img src="#" alt="#" /> Clean Kitchen</li>
                        </ul>
                    </section>
                    <button className="btn">About Us</button>
                </section>
            </section>
            <section className="home-section-style">
                <h3 className="section-title">Menu That Always Make You Fall In Love</h3>
                <ul>
                    <li>Ramen</li>
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                    <li>South Indian</li>
                    <li>North Indian</li>
                    <li>Desserts</li>
                    <li>Drinks</li>
                </ul>
                <section className="card-container">
                    <Card />
                </section>
            </section>
        </main>
    )
}

export default Main