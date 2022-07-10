import React from "react";
import Bag from "../images/desktop/bag.jpg";
import Cookie from "../images/desktop/cookies.jpg";
import First from "../images/desktop/first.jpg";
import Flower from "../images/desktop/flower.jpg";
import IceCream from "../images/desktop/icecream.jpg";
import Men from "../images/desktop/men.jpg";
import NoIdea from "../images/desktop/no-idea.jpg";
import Stone from "../images/desktop/stone.jpg";
const Creations = () => {
  return (
    <section id="creations">
      <div className="max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        {/* Container HEader */}
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our creations
          </h2>
          <button className="hidden md:block btn">See ALL</button>
        </div>

        <div className="item-container">
          <div className="group item">
            <img
              src={Bag}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />

            <img src={Bag} alt="" className="w-full md:hidden" />

            <div className="item-gradient"></div>

            <h5>Deep Earth</h5>
          </div>
          <div className="group item">
            <img
              src={Cookie}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />

            <img src={Cookie} alt="" className="w-full md:hidden" />

            <div className="item-gradient"></div>

            <h5>Love Cookies</h5>
          </div>
          <div className="group item">
            <img
              src={First}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />

            <img src={First} alt="" className="w-full md:hidden" />

            <div className="item-gradient"></div>

            <h5>Soccer Team VR</h5>
          </div>
          <div className="group item">
            <img
              src={Flower}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />

            <img src={Flower} alt="" className="w-full md:hidden" />

            <div className="item-gradient"></div>

            <h5>The Grid</h5>
          </div>
        </div>

        <div className="item-container mt-10">
          <div className="group item">
            <img
              src={IceCream}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />

            <img src={IceCream} alt="" className="w-full md:hidden" />

            <div className="item-gradient"></div>

            <h5>From Up Above VR</h5>
          </div>
          <div className="group item">
            <img
              src={Men}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />

            <img src={Men} alt="" className="w-full md:hidden" />

            <div className="item-gradient"></div>

            <h5>Pocket Borealis</h5>
          </div>
          <div className="group item">
            <img
              src={NoIdea}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />

            <img src={NoIdea} alt="" className="w-full md:hidden" />

            <div className="item-gradient"></div>

            <h5>The Curiosity</h5>
          </div>
          <div className="group item">
            <img
              src={Stone}
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />

            <img src={Stone} alt="" className="w-full md:hidden" />

            <div className="item-gradient"></div>

            <h5>Make It Fisheye</h5>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">SEE ALL</button>
        </div>
      </div>
    </section>
  );
};

export default Creations;
