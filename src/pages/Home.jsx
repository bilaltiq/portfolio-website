import { NavBar } from "../components/NavBar";
import { CustomCursor } from "../components/CustomCursor";
import { HeroSection } from "../components/HeroSection";
import { Ticker } from "../components/Ticker";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { TechStack } from "../components/TechStack";
import { Footer } from "../components/Footer";

export const Home = () => (
  <div className="flex min-h-screen flex-col overflow-x-hidden">
    <CustomCursor />
    <NavBar />

    <main className="flex-1">
      <HeroSection />
      <Ticker />
      <Projects />
      <About />
      <TechStack />
    </main>

    <Footer />
  </div>
);
