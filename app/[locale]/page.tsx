import SocialLinks from "@/components/home/social-links"
import Hero from "@/components/home/hero"
import ThemeSwitcher from "@/components/layout/theme-switcher"
import LocaleSwitcher from "@/components/layout/locale-switcher"
// import PaintCanvas from "@/components/paint-canvas"
import ExpandedCanvas from "@/components/home/expanded-canvas"

import { query } from "@/lib/strapi";

import { getLocale } from "next-intl/server"
import { Locale } from "@/i18n/routing";
const Home = async () => {

  const locale = await getLocale() as Locale;

  const res = await query(`home?populate=image&locale=${locale}`)

  console.log(res)
  return (
    <>
      <ExpandedCanvas />
      <div className="flex flex-wrap items-end content-end justify-between w-full gap-40">
        <section className="flex flex-col max-h-50 justify-between h-full">
          <ThemeSwitcher />
          <LocaleSwitcher />
          <SocialLinks />
        </section>
        <section className="flex flex-col max-h-50 justify-between h-full">
          <Hero />
        </section>
      </div>
    </>

  )
}

export default Home

