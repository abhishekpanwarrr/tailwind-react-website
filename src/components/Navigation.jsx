import React, { useState } from "react";
import Logo from "../images/logo.svg";
const Navigation = () => {
  const [menu, setMenu] = useState(false);
  // const toggleMenu = () => {};
  return (
    <section id="hero">
      <div className="container max-w-6xl mx-auto px-6 py-12 ">
        <nav className="flex items-center justify-between font-bold text-white">
          <img src={Logo} alt="LoGO" className="h-10 w-32" />
          {/* Menu */}
          <div className=" hidden h-10 font-mono md:flex md:space-x-8">
            <div className="group">
              <a href="/">Home</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="/">Contact</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="/">Events</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="/">Support</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>

          {/* Hemburger Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className={` ${
                menu
                  ? "open z-40 block hemburger md:hidden focus:outline-none"
                  : "z-40 block hemburger md:hidden focus:outline-none"
              }`}
              id="menu-btn"
              onClick={() => setMenu((open) => !open)}
            >
              <span className="hemburger-top"></span>
              <span className="hemburger-middle"></span>
              <span className="hemburger-bottom"></span>
            </button>
          </div>
        </nav>
        {/* Mobile Menu items */}
        <div
          className={`absolute  ${
            menu ? "flex" : "hidden"
          } flex-col left-0 bottom-0 top-0 w-full bg-black self-end min-h-screen pt-40 pl-12 space-y-6 text-lg uppercase z-30 py-1 text-white text-center`}
        >
          <a href="/" className="hover:text-blue-100">
            Home
          </a>
          <a href="/" className="hover:text-blue-100">
            Home
          </a>
          <a href="/" className="hover:text-blue-100">
            Home
          </a>
          <a href="/" className="hover:bg-blue-100">
            Home
          </a>
          <a href="/" className="hover:bg-blue-100">
            Home
          </a>
        </div>
        {/* Hero Content */}
        <div className="max-w-lg mt-32 mb-30 md:mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          Impressive Experience That Deliver
        </div>
      </div>
    </section>
  );
};

export default Navigation;
