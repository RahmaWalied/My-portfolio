import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Hero from './Components/Navbar/Hero/Hero';
import Skills from './Pages/About/Skills/Skills';
import ContactSection from './Pages/About/ContactSection/ContactSection';
import Projects from './Pages/About/Projects/Projects';
import Footer from './Components/Navbar/Footer/Footer';
import ScrollToTopBtn from './Components/Navbar/ScrollToTopButton/ScrollToTopBtn';


export default function App() {
  const heroRef = useRef();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom || 0;
      setShowScroll(heroBottom < 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full overflow-x-hidden">
      <Navbar />
      <main className="pt-20 w-full">
        <Hero heroRef={heroRef} />
        <About />
        <Skills />
        <Projects />
        <ContactSection />
        <Footer />
      </main>

      {showScroll && <ScrollToTopBtn />}
    </div>
  );
}
