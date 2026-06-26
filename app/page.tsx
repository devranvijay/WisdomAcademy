import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Faculty from "./components/Faculty";
import WhyChooseUs from "./components/WhyChooseUs";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ClientEffects from "./components/ClientEffects";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <ClientEffects />
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Faculty />
      <WhyChooseUs />
      <Results />
      <Testimonials />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
