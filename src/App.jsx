import useReveal from "./hooks/useReveal";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Values from "./components/Values";
import Founders from "./components/Founders";
import Teams from "./components/Teams";
import Life from "./components/Life";
import Journey from "./components/Journey";
import Blog from "./components/Blog";
import Jobs from "./components/Jobs";
import Process from "./components/Process";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  useReveal();
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Values />
        <Founders />
        <Teams />
        <Life />
        <Journey />
        <Blog />
        <Jobs />
        <Process />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
