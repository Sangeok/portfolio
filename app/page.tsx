import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-gray-200">
      <Header />
      <Hero />
      <Partners />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Footer />
    </main>
  );
}