import AboutSec from "./components/AboutSec";
import ConatctSec from "./components/ConatctSec";
import Footer from "./components/Footer";
import GlobSec from "./components/GlobSec";
import HeroSec from "./components/HeroSec";
import Navbar from "./components/Navbar";
import ServicesSec from "./components/ServicesSec";
// import SloganSec from "./components/SloganSec";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full mx-auto">
        <HeroSec />
        <AboutSec />
        <ServicesSec />
        <Testimonials />
        {/* <SloganSec /> */}
        <GlobSec />
        <ConatctSec />
      </div>
      <Footer />
    </>
  );
}
