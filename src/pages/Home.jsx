import { ThemeToggle } from "../components/ThemeToggle"
import { CustomBackground } from "../components/CustomBackground"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { Contact } from "../components/Contact"
import { Footer }  from "../components/Footer"


export const Home = () => {
    return <div className="min-h-screen 
    bg-background
    text-foreground overflow-x-hidden"> 
    
        <NavBar />
        <CustomBackground />
        {/* <ThemeToggle /> */}

        <main>
            <HeroSection />
            <About />
            <Projects />
            <Contact />
        </main>

        <Footer />

    </div>
}