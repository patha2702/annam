import React from "react";
import x from "../../assets/images/x.svg"
import facebook from "../../assets/images/facebook.svg"
import instagram from "../../assets/images/instagram.svg"

const Footer = () => {
  return (
    <footer className="container px-2.5 py-2 flex flex-col justify-around items-start gap-4">
      <section className="flex flex-col gap-4">
        <h4 className="text-orange-500 text-3xl font-semibold">Annam</h4>
        <p className="leading-normal py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          reiciendis nesciunt, eaque vitae placeat laborum!
        </p>
        <section className="flex justify-start gap-8">
          <img src={x} alt="twitter X logo" />
          <img src={facebook} alt="facebook logo" />
          <img src={instagram} alt="instagram logo" />
        </section>
      </section>
      <section className="w-full flex justify-between gap-4">
        <section className="w-1/2 flex flex-col gap-2">
          <h4 className="text-orange-500 text-base font-semibold">About Us</h4>
          <ul>
            <li>About us</li>
            <li>Service us</li>
            <li>Contact</li>
            <li>Company</li>
          </ul>
        </section>
        <section className="w-1/2 flex flex-col gap-2">
          <h4 className="text-orange-500 text-base font-semibold">Company</h4>
          <ul>
            <li>Partnership</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Sitemap</li>
          </ul>
        </section>
      </section>
      <section className="py-4 flex flex-col justify-around gap-2">
        <h4 className="text-orange-500 text-base font-semibold">Get in touch</h4>
        <p className="leading-normal py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut dolores
          saepe? Lorem, ipsum.
        </p>
        <div className="w-full flex justify-center gap-2">
          <input type="email" className="w-2/3 rounded-full py-2 px-4 bg-gray-200 text-gray-600 border-none" placeholder="Email" />
          <button className="w-1/3 rounded-full px-4 py-1 text-white text-lg font-semibold bg-orange-500">Subscribe</button>
        </div>
        <span className="text-center">Copyright &copy; 2024 Annam </span>
        <a target="_blank" href="https://icons8.com/icon/phOKFKYpe00C/twitterx">TwitterX</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        <a target="_blank" href="https://icons8.com/icon/32309/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        <a target="_blank" href="https://icons8.com/icon/61nQcivxf1dj/facebook">Facebook</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </section>
    </footer>
  );
};

export default Footer;
