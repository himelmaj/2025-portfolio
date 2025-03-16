import ContactLinks from "@/components/contact-links"
import Hero from "@/components/hero"
import ThemeSwitcher from "@/components/theme-switcher"


const Home = () => {
  return (
    <div className="flex flex-1 justify-between  flex-wrap items-end">
      <div className="flex flex-1 flex-col">
        <ThemeSwitcher />
        <ContactLinks />
      </div>
      <Hero />
    </div>

  )
}

export default Home

