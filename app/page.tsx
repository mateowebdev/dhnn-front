import Image from "next/image";
import plane from "../public/images/plane.jpg";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Nav />
      <main className="w-full">
        <Hero />
      </main>
      {/* <Image src={plane} width={500} alt="aeroplane" /> */}
    </main>
  );
}
