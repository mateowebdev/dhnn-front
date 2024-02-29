"use client";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";

export default function Novedades() {
  const url = "http://localhost:3000/api/filter";
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get(`${url}${query}`).then((res) => {
      setFiltered(res.data.filtered);
    });
  }, [query]);

  const setNacional = () => {
    setQuery("?categoria=nacional");
  };

  const setInternacional = () => {
    setQuery("?categoria=internacional");
  };

  return (
    <main className="flex flex-col">
      <Nav />
      <main className="w-full pt-32 p-10">
        <div className="py-2 flex flex-col gap-2">
          <h2 className="font-medium text-lg">
            Aplicación del endpoint personalizado
          </h2>
          <p>
            Datos de la consulta a la url: {url} que soporta el parametro de
            tipo de categoría.
          </p>
          <code>
            {url}
            <span className="font-bold">{query}</span>
          </code>
        </div>
        <hr />
        <button
          className="bg-blue-700 text-white p-4 font-medium text-sm rounded m-4"
          onClick={setNacional}
        >
          Noticias Nacionales
        </button>
        <button
          className="bg-blue-700 text-white p-4 font-medium text-sm rounded m-4"
          onClick={setInternacional}
        >
          Noticias Internacionales
        </button>

        <div className="p-4 bg-gray-100 text-xs">
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(filtered, null, 2)}
          </pre>
        </div>
      </main>
    </main>
  );
}
