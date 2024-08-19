import { useEffect } from "react";

//components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
import Testimonials from "./components/Testimonials/Testimonials";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";

//AOS (ANIMATE ON SCROLL)
import "aos/dist/aos.css";
import Aos from "aos";

export default function App() {
  //AOS (ANIMATE ON SCROLL)
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
      once: "true",
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Partners />
      <Footer />
    </>
  );
}
