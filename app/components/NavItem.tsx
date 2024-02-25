'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

type ItemProps = {
  url: string;
  text: string;
};
export default function NavItem({ url, text }: ItemProps) {
    const pathname = usePathname()
  
  const selected = pathname === url;

  return (
    <li className="flex items-center h-full px-4 hover:border-b-2 font-semibold hover:border-blue-700 active:text-blue-700">
      <Link href={url} className={`${selected ? "text-blue-800" : ""}`}>
        {text}
      </Link>
    </li>
  );
}
