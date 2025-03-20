import ContactLinks from "@/components/contact-links"
import Hero from "@/components/hero"
import ThemeSwitcher from "@/components/theme-switcher"
import LocaleSwitcher from "@/components/locale-switcher"
// import PaintCanvas from "@/components/paint-canvas"


const Home = () => {
  return (
    <>
      <div className="flex flex-wrap items-end content-end justify-between w-full gap-40">
        <section className="flex flex-col gap-20 ">
          <ThemeSwitcher />
          <LocaleSwitcher />
          <ContactLinks />
        </section>
        <section className="flex flex-col gap-8">
          <Hero />
        </section>
      </div>
    </>

  )
}

export default Home

