'use client';
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownLeft } from "react-icons/fi";
import { Noticia } from "../types/Noticia";

type heroProps = {
  noticia: Noticia;
}

export default function Hero({noticia}:heroProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleVisibility = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/images/${
          noticia.attributes.imagenUrl || "plane.jpg"
        }')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full min-h-screen flex items-end"
    >
      <div className="bg-white w-[600px] p-8 sm:p-12 sm:pl-20 flex flex-col">
        <div className="flex">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-gray-500 uppercase font-medium text-sm">
              {noticia.attributes.subTitulo || "Sub titulo"}
            </h3>
            <h2 className="font-bold text-2xl">
              {noticia.attributes.titulo || "Lorem Ipsum"}
            </h2>
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
              {noticia.attributes.descripcion[0].children[0].text ||
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
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
