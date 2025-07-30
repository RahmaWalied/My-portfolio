import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Player } from "@lottiefiles/react-lottie-player";
import logoAnimation from "../../assets/logo.json"; // مسار اللوجو المتحرك

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-lg
        ${
          scrolled
            ? "shadow-md backdrop-blur-md bg-white/80 dark:bg-gray-900/80"
            : "bg-transparent"
        }
        px-4 sm:px-6 md:px-6 py-3 dark:text-white`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Animation */}
        <div className="flex items-center justify-center text-3xl md:text-3xl font-extrabold tracking-wide">
          <div className="w-16 h-16 md:w-10 md:h-10 flex-shrink-0">
            <Player
              autoplay
              loop
              src={logoAnimation}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="flex items-center">
            <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
              Rahma
            </span>
            <span className="text-pink-600 dark:text-pink-300">•</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative hover:text-pink-600 transition-all duration-300 after:content-[''] after:block after:h-[2px] after:w-0 after:bg-pink-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="hover:text-pink-600 transition-all"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden hover:text-pink-600 transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden w-full 
          ${
            isOpen
              ? "max-h-[300px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }
          bg-white dark:bg-gray-900 rounded-b-xl`}
      >
        <ul className="flex flex-col gap-4 text-lg font-medium">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="block w-full hover:text-pink-600 transition-all"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
