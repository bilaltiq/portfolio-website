import { NavBar } from "../components/NavBar";
import { CustomCursor } from "../components/CustomCursor";
import { HeroSection } from "../components/HeroSection";
import { Ticker } from "../components/Ticker";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { TechStack } from "../components/TechStack";
import { Footer } from "../components/Footer";

export const Home = () => (
  <div className="flex min-h-screen flex-col overflow-x-hidden">
    <CustomCursor />
    <NavBar />

    <main className="flex-1">
      <HeroSection />
      <Ticker />
      <About />
      <Projects />
      <TechStack />
    </main>

    <Footer />
  </div>
);
