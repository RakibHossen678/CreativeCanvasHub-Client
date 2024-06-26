import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-gray-100">
      <footer className="footer p-10 lg:w-11/12 mx-auto text-base-content">
        <aside className="max-w-md">
          <div>
            <h1 className="text-3xl font-bold py-2 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              CreativeCanvasHub
            </h1>
            <p>
              Arts and crafts evolved from the fixed notions of fundamental
              ideas to the modern usage of available materials and truthful
              representation of the existing lifestyles around the place.
            </p>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Useful links</h6>
          <a className="link link-hover">
            <Link to="/">Home</Link>
          </a>
          <a className="link link-hover">
            <Link to="/allCraft">All Art & craft Items</Link>
          </a>
          <a className="link link-hover">
            <Link to="/addCraft">Add Craft Item</Link>
          </a>
          <a className="link link-hover">
            <Link to="/list">My Art & Craft List</Link>
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Our Address</h6>
          <a className="link link-hover ">
            625 @ David Blake Road, Mirpur, <br /> LA 14536, Dhaka
          </a>
          <a className="link link-hover">Contact : 305 533 - 1122</a>
          <a className="link link-hover">
            Email : CreativeCanvasHub@email.com{" "}
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Elsewhere</h6>
          <a className="link link-hover flex items-center text-[16px]">
            <FaFacebook className="mr-2" /> Facebook
          </a>
          <a className="link link-hover flex items-center text-[16px]">
            <FaTwitter className="mr-2" /> Twitter
          </a>
          <a className="link link-hover flex items-center text-[16px]">
            <FaInstagram className="mr-2" /> Instagram
          </a>
        </nav>
      </footer>
      <footer className="footer items-center flex justify-center p-4 bg-gray-200 ">
        <aside className="items-center grid-flow-col">
          <p className="text-center">  Copyright © 2024 - All right reserved by CreativeCanvasHub</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
