import React from "react";
import LOGO from "../images/logo.svg";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { ImPinterest2 } from "react-icons/im";
const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-6xl py-10 mx-auto">
        {/* Flex Container */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8">
              <img src={LOGO} className="w-44 md:ml-3" alt="LOGO" />
            </div>

            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              <div className="h-10 group">
                <a href="/">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              <div className="h-10 group">
                <a href="/">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              <div className="h-10 group">
                <a href="/">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              <div className="h-10 group">
                <a href="/">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              <div className="h-10 group">
                <a href="/">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            <div className="flex items-center justify-center space-x-4 md:justify-end text-white">
              <div className="h-12 group">
                <a
                  href="https://instagram.com/abhishekpanwarrr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram className="h-12 text-xl" />
                </a>
              </div>

              <div className="h-12 group">
                <a
                  href="https://linkedin.com/in/abhishekpanwarrr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin className="h-12 text-xl" />
                </a>
              </div>

              <div className="h-12 group">
                <a
                  href="https://in.pinterest.com/abhishekpanwarrr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImPinterest2 className="h-12 text-xl" />
                </a>
              </div>

              <div className="h-12 group">
                <a href="tel:+919991237576" target="_blank" rel="noreferrer">
                  <RiMessengerLine className="h-12 text-xl" />
                </a>
              </div>
            </div>

            <div className="font-bold">
              &copy; 2022 Loopstudios. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
