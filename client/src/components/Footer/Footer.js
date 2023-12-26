import React from "react";
import x from "../../assets/images/x.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";

const Footer = () => {
  return (
    <footer className="px-2.5 md:px-5 py-2 md:py-4 lg:py-6 flex flex-col lg:flex-row lg:items-start lg:flex-wrap justify-around items-start gap-4 md:gap-6">
      <section className="flex flex-col gap-4 md:gap-6 lg:gap-2 lg:w-[30%] lg:py-4">
        <h4 className="text-orange-500 text-3xl md:text-4xl font-semibold">
          Annam
        </h4>
        <p className="leading-normal md:text-xl py-2 md:py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          reiciendis nesciunt, eaque vitae placeat laborum!
        </p>
        <section className="flex justify-start gap-8 md:py-4">
          <img src={x} alt="twitter X logo" />
          <img src={facebook} alt="facebook logo" />
          <img src={instagram} alt="instagram logo" />
        </section>
      </section>
      <section className="w-full flex justify-between gap-4 md:gap-6 lg:w-[30%] lg:py-4">
        <section className="w-1/2 flex flex-col gap-2 md:gap-4">
          <h4 className="text-orange-500 text-base md:text-2xl font-semibold">
            About Us
          </h4>
          <ul className="md:text-xl lg:py-4">
            <li>About us</li>
            <li>Service us</li>
            <li>Contact</li>
            <li>Company</li>
          </ul>
        </section>
        <section className="w-1/2 flex flex-col gap-2 md:gap-4">
          <h4 className="text-orange-500 text-base md:text-2xl font-semibold">
            Company
          </h4>
          <ul className="md:text-xl lg:py-4">
            <li>Partnership</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Sitemap</li>
          </ul>
        </section>
      </section>
      <section className="py-4 flex flex-col justify-around gap-2 md:gap-4 lg:w-[30%] lg:py-4">
        <h4 className="text-orange-500 text-base md:text-2xl font-semibold">
          Get in touch
        </h4>
        <p className="leading-normal md:text-xl py-2 md:py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut dolores
          saepe? Lorem, ipsum.
        </p>
        <div className="w-full flex justify-center gap-2 md:gap-4">
          <input
            type="email"
            className="w-2/3 rounded-full py-2 md:py-4 px-4 md:px-6 bg-gray-200 md:text-xl text-gray-800 border-none"
            placeholder="Email"
          />
          <button className="w-1/3 rounded-full px-4 md:px-6 py-1 md:py-2 text-white text-lg md:text-xl font-semibold bg-orange-500">
            Subscribe
          </button>
        </div>
      </section>
      <section>
        <span className="block text-center md:text-xl">
          Copyright &copy; 2024 Annam{" "}
        </span>
        <a target="_blank" href="https://icons8.com/icon/phOKFKYpe00C/twitterx">
          TwitterX
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
        <a target="_blank" href="https://icons8.com/icon/32309/instagram">
          Instagram
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
        <a target="_blank" href="https://icons8.com/icon/61nQcivxf1dj/facebook">
          Facebook
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </section>
    </footer>
  );
};

export default Footer;
