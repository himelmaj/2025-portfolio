"use client";

import { usePathname } from "@/i18n/navigation";
import useMouse from "@/hooks/use-mouse";
import NavLink from "@/components/ui/nav-link";
import { useTranslations } from 'next-intl';


const Header = () => {

  const pathname = usePathname();
  const { x, y } = useMouse();


  const t = useTranslations("nav");

  const ROUTES = [
    { href: t("home.path"), label: t("home.label") },
    { href: t("work.path"), label: t("work.label") },
    { href: t("video.path"), label: t("video.label") },
  ];

  type Route = {
    href: string;
    label: string;
  };

  const isActive = (href: string) => pathname === href;

  

  return (
    <header>
      <nav className="">
        <ul className="flex flex-wrap justify-between uppercase">
          <span className="w-20 text-left hidden md:block">X{x}</span>
          {ROUTES.map((route: Route) => (
            <NavLink {...route} isActive={isActive(route.href)} key={route.href} className=" hover:text-amber-500" />
          ))}
          <span className="w-20 text-right hidden md:block">Y{y}</span>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


