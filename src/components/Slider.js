import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import Data from "../Data/SliderData";
import { Link } from "react-router-dom";
export default function Slider() {
  const [index, setindex] = useState(0);

  const forward = () => {
    if (index === Data.length - 1) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      return;
    }
    setindex(index - 1);
  };

  return (
    <div className="w-screen ">
      <div
        key={index}
        // className="z-40 animate__animated animate__fadeIn"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0.2, 0.1, 0.7), rgba(0, 0, 0, 0.4)),url(${Data[index].image})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "90vh",
        }}
      >
        <div className="flex items-center justify-between h-screen px-3 md:px-10 gap-7 ">
          <div className="p-2.5 bg-[#00000000] rounded-full hover:bg-[#ff5e15] transition duration-500 ease-in-out">
            <AiOutlineArrowLeft
              onClick={prev}
              size={45}
              className="hidden md:block md:w-11 md:h-11 "
              color="white"
              cursor={"pointer"}
            />
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left lg:space-y-4 lg:-ml-36 ">
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
              {Data[index].Tittle}
            </h1>
            <h2 className="my-4 text-2xl font-semibold text-[#ff5e15] md:text-4xl lg:text-6xl">
              {Data[index].HighLight}
            </h2>
            <p className="max-w-3xl my-4 text-sm leading-7 text-white sm:text-lg font- lg:text-xl">
              {Data[index].Para}
            </p>
            <Link
              to={`/whatwedo/${Data[index].catgeory}`}
              state={{
                image: Data[index].image,
                Tittle: Data[index].Tittle,
                Para: Data[index].Para1,
              }}
            >
              <button className="bg-[#ff5e15] relative  flex space-x-2 transition duration-300 ease-in-out items-center font-semibold rounded-lg overflow-hidden shadow-2xl shadow-black text-white px-6 py-1.5 my-4 group">
                <span className="absolute left-0 w-0 h-full transition-all duration-300 ease-in-out bg-orange-700 opacity-100 group-hover:w-full"></span>
                <span className="relative flex items-center">
                  Learn More
                  <HiMiniArrowSmallRight size={30} />
                </span>
              </button>
            </Link>
          </div>
          <div className="p-2.5 bg-[#00000000] rounded-full hover:bg-[#ff5e15] transition duration-500">
            <AiOutlineArrowRight
              onClick={forward}
              size={45}
              className="hidden md:block md:w-11 md:h-11 "
              color="white"
              cursor={"pointer"}
            />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
