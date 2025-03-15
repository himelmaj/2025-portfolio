"use client";

import { Link, usePathname } from "@/i18n/navigation";
import RandomLetterSwapPingPong from "@/components/ui/random-letter-swap-pingpong-anim";
import Dot from "./ui/dot";
import { cn } from "@/lib/utils";
import useMouse from "@/hooks/use-mouse";
import NavLink from "./ui/nav-link";



const ROUTES = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/video", label: "Video" },
];

const Header = () => {

  const pathname = usePathname();
  const { x, y } = useMouse();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="mt-3 mx-2">
      <ul className="flex flex-wrap justify-between  text-sm uppercase">
        <span className="w-20 text-left">X{x}</span>
        {ROUTES.map((route) => (
            <NavLink {...route} isActive={isActive(route.href)} key={route.href} className=" hover:text-orange-400" />
        ))}
        <span className="w-20 text-right">Y{y}</span>
      </ul>
    </nav>
  );
};

export default Header;


