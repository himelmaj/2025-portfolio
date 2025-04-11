import ThemeSwitcher from "@/components/layout/theme-switcher"
import LocaleSwitcher from "@/components/layout/locale-switcher"
// import ExpandedCanvas from "@/components/home/expanded-canvas"
import { getLocale } from "next-intl/server"
import { Locale } from "@/i18n/routing";
import { getHomeInfo } from "@/actions/get-home-info"
import { BlocksRenderer, } from '@strapi/blocks-react-renderer';
import { Suspense } from "react"

import AboutSkeleton from "@/components/home/about-skeleton";

const Home = async () => {

  const locale = await getLocale() as Locale;

  const { about } = await getHomeInfo(locale)

  return (
    <>
      <div className="flex flex-wrap flex-1 items-end justify-between">
        <section className="flex flex-col gap-4 max-w-sm ">
          <LocaleSwitcher />
          <ThemeSwitcher />
        </section>
        <section className="flex flex-col max-w-sm gap-4 [&>p>a]:underline">
          <Suspense fallback={<AboutSkeleton />} >
            {/* <ExpandedCanvas src={image.src} alt={image.alt} /> */}
            <BlocksRenderer content={about} />
          </Suspense>
        </section>
      </div>
    </>

  )
}

export default Home