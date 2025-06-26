import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { X, Menu } from "lucide-react"

const navItems =[
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Experience", href: "#experience"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]



export const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() =>{
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return(
    <>
    {/* ─────── NAV BAR ─────── */}
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-2 bg-background/80 bg-opacity-20 backdrop-blur-sm shadow-4xl border border-black/10 rounded-2xl"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Bilal Tariq </span>
          </span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duratiton-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={0} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>

    {/* ─────── MOBILE MENU ─────── */}
    <div
  className={cn(
    "fixed inset-0 z-50 flex flex-col items-center justify-center md:hidden",
    "bg-background/95 backdrop-blur-md transition-opacity duration-300",
    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  )}
>
  <button
    onClick={() => setIsMenuOpen(false)}
    className="absolute top-2.5 right-13.5 p-2 text-foreground"
    aria-label="Close Menu"
  >
    <X size={24} />
  </button>

  <div className="flex flex-col space-y-8 text-xl">
    {navItems.map((item, key) => (
      <a
        key={key}
        href={item.href}
        onClick={() => setIsMenuOpen(false)}
        className="text-foreground/80 hover:text-primary transition-colors duratiton-300"
      >
        {item.name}
      </a>
    ))}
  </div>
</div>
  </>
);
}