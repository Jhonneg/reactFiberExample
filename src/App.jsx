import NavBar from "./components/HeroModels/NavBar";
import LogoSection from "./components/LogoSection";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
    </>
  );
}
