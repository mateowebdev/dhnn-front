
import Image from "next/image";
import logo from "../../public/aeronex-logo.svg";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <nav className="h-24 flex items-center justify-center gap-10 border-2">
      <Image src={logo} width={170} alt="logo" />
      <ul className="flex items-center h-full">
        <NavItem url={"/"} text={"Nosotros"}/>
        <NavItem url={"/#"} text={"Novedades"}/>
        <NavItem url={"/a"} text={"Inversores"}/>
      </ul>
    </nav>
  );
}
