import Image from "next/image";
import logo from "../../public/aeronex-logo.svg";
import NavItem from "./NavItem";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="hidden fixed bg-white w-full h-24 sm:flex items-center justify-center gap-10 border-2">
      <Link href={"/"}>
        <Image src={logo} width={170} alt="logo" />
      </Link>
      <ul className="flex items-center h-full">
        <NavItem url={"/"} text={"Nosotros"} />
        <NavItem url={"/novedades"} text={"Novedades"} />
        <NavItem url={"/"} text={"Inversores"} />
      </ul>
    </nav>
  );
}
