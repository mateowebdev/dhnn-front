import Nav from "./components/Nav";
import Hero from "./components/Hero";

import axios from "axios";
import BlogCards from "./components/BlogCards";

async function getData() {
  const res = await axios.get("http://localhost:3000/api/home");

  if (!res) {
    throw new Error("Error fetching data.");
  }

  return res.data;
}

export default async function Home() {
  const { data, serverOff } = await getData();

  return (
    <main className="flex flex-col">
      {serverOff && (
        <div className="bg-red-500 text-white p-1 w-full text-center bg-opacity-80 fixed z-10">
          Servidor apagado. Data local funcionando.
        </div>
      )}
      <Nav />
      <main className="w-full">
        <Hero noticia={data[0]} />
        <BlogCards blogs={data} />
      </main>
    </main>
  );
}
