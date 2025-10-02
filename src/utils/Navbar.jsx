// src/components/Navbar.jsx

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link as DomLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll()

  // Smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })


  const navItems = [
    { name: "Home", link: "home" },
    { name: "Programs", link: "programs" },
    { name: "Process", link: "process" },
    { name: "Testimonial", link: "testimonial" },
    { name: "Meet our Team", link: "team" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <>
      <motion.div
        className="h-2 bg-blue-500 dark:bg-teal origin-left z-60 fixed top-0 left-0 right-0"
        style={{ scaleX }}
      />
      <nav className="dark:bg-black bg-gray-100 shadow-md fixed w-full top-0 left-0 z-50 p-2">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2 dark:hidden">
                <img
                  src="/logo/logo.gif"   // 👈 place your logo file inside public/logo.png
                  alt="MyLogo"
                  className="h-14 w-auto object-contain"
                />
                {/* Optional text next to logo */}
              </a>
              <a href="/" className="items-center space-x-2 hidden dark:flex">
                <img
                  src="/logo/logoDark.png"   // 👈 place your logo file inside public/logo.png
                  alt="MyLogo"
                  className="h-14 w-auto object-contain"
                />
                {/* Optional text next to logo */}
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  spy={true}                  // track scroll & set active
                  smooth={true}               // smooth scrolling
                  offset={-80}                // adjust for fixed navbar height
                  duration={400}
                  // activeClass="text-blue-600 font-semibold"
                  className="cursor-pointer relative text-darker dark:text-gray-50 hover:text-teal-500 dark:hover:text-blue-400 font-medium group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 dark:bg-blue-400 bg-teal-500 transition-all group-hover:w-full"></span>
                </Link>
              ))}

            </div>

            <div className="flex">
              <button
                onClick={toggleTheme}
                className="cursor-pointer dark:bg-gray-50 bg-gray-900 text-gray-50 dark:text-gray-900 p-3 rounded-full shadow-md hover:scale-110 transition"
              >
                {theme === "light" ? <Moon className="w-5 h-5 " /> : <Sun className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      N strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white shadow-md"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  spy={true}                  // track scroll & set active
                  smooth={true}               // smooth scrolling
                  offset={-80}                // adjust for fixed navbar height
                  duration={400}

                  className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)} // close after click
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>


      </nav>
    </>
  );
}
