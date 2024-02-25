
import Image from "next/image";
import plane from "../public/images/plane.jpg";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Nav />
      {/* <Image src={plane} width={500} alt="aeroplane" /> */}
    </main>
  );
}
