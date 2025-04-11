"use client";

import { usePathname } from "@/i18n/navigation";
import NavItem from "@/components/ui/nav-item";
import { useTranslations } from 'next-intl';
import { cn } from "@/lib/utils";


const Navbar = ({ className }: { className?: string }) => {

  const pathname = usePathname();
  const t = useTranslations("nav");

  const routes = [
    { href: t("home.path"), label: t("home.label") },
    { href: t("projects.path"), label: t("projects.label") },
    { href: t("info.path"), label: t("info.label") },
  ] as const;

  type Route = typeof routes[number];

  const currentRoute = (href: Route["href"]) => pathname === href;

  return (
    <nav className={cn("flex items-center justify-center gap-4 sm:justify-start", className)}>
      <ul className="flex flex-wrap lowercase">
        {routes.map((route: Route) => (
          <li key={route.href} className="flex items-center">
            <NavItem {...route} isActive={currentRoute(route.href)} className="" />
            {route.href !== routes[routes.length - 1].href && (
              <i className="mx-2">/</i>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;


