import AboutSec from "./components/AboutSec";
import HeroSec from "./components/HeroSec";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full mx-auto">
        <HeroSec />
        <AboutSec />
      </div>
    </>
  );
}
