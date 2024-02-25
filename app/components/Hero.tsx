"use client";
import { useState } from "react";

import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownLeft } from "react-icons/fi";

export default function Hero() {
  const [expanded, setExpanded] = useState(true);

  const toggleVisibility = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/images/airport.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full h-screen flex items-end"
    >
      <div className="bg-white w-[600px] p-8 sm:p-12 sm:pl-20 flex flex-col">
        <div className="flex">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-gray-500 uppercase font-medium text-sm">
              Sub titulo
            </h3>
            <h2 className="font-bold text-2xl">Titulo de la noticia</h2>
          </div>
          <div className="hidden sm:block">
            {!expanded && (
              <FiArrowUpRight
                className="text-blue-700"
                onClick={toggleVisibility}
              />
            )}
            {expanded && (
              <FiArrowDownLeft
                className="text-blue-700"
                onClick={toggleVisibility}
              />
            )}
          </div>
        </div>
        {expanded && (
          <div className="flex flex-col sm:items-start gap-4">
            <div className="h-[1px] w-32 mt-4 bg-blue-700"></div>
            <p className=" text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              nihil unde officiis a eos minima optio facilis sed iste quo.
            </p>
            <button className="bg-blue-700 text-white p-4 font-medium text-sm rounded">
              Call to action
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
