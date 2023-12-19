import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer-section">
            <section className="socials-section">
                <h4 className="title">Annam</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet reiciendis nesciunt, 
                    eaque vitae placeat laborum!
                </p>
                <section>
                    <img src="#" alt="#" />
                    <img src="#" alt="#" />
                    <img src="#" alt="#" />
                </section>
            </section>
            <section className="about-section">
                <h4 className="title">About Us</h4>
                <ul>
                    <li>About us</li>
                    <li>Service us</li>
                    <li>Contact</li>
                    <li>Company</li>
                </ul>
            </section>
            <section className="company-section">
                <h4 className="title">Company</h4>
                <ul>
                    <li>Partnership</li>
                    <li>Terms of Use</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                </ul>
            </section>
            <section className="contact-section">
                <h4 className="title">Get in touch</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut dolores saepe? Lorem, ipsum.</p>
                <div className="footer-input-field-container">
                    <input type="email" className="footer-input-field" />
                    <button className="footer-btn">Subscribe</button>
                </div>
            </section>
        </footer>
    )
}

export default Footer