import React, { useState, useEffect } from "react";

const HeroWithStickyNavbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for managing mobile menu

  const handleScroll = () => {
    const heroHeight = document.getElementById("hero").clientHeight - 50;
    setSticky(window.scrollY > heroHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-sans">
      <nav
        className={`fixed w-full z-30 transition-colors duration-300 ${
          isSticky ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
            <span
              className="font-pacifico text-2xl"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Tamara Bakery
            </span>
          </div>
          <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block flex space-x-4 justify-center`}
          >
            {/* Responsive navbar items with hover shadow */}
            {["Home", "About", "Products", "Team", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className={`py-2 px-4 rounded-lg ${
                    isSticky
                      ? "bg-red-500 text-white"
                      : "bg-white bg-opacity-50 text-black"
                  } transition-colors duration-300 hover:shadow-lg`}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </nav>
      <div
        id="hero"
        className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/img/hero.jpeg')" }}
      >
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">
          Welcome to Our Bakery
        </h1>
        <p className="text-white text-sm md:text-xl lg:text-2xl text-center mt-4">
          Explore our world of freshly baked goodies
        </p>
      </div>
      <div className="px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center items-center">
          {["Cakes", "Muffins", "Pastries", "Desserts", "Breads"].map(
            (item, index) => (
              <div
                key={index}
                className="w-full h-32 md:h-48 bg-white rounded-lg shadow-lg p-4 flex justify-center items-center"
                style={{
                  backgroundImage: `url(https://source.unsplash.com/featured/?${item.toLowerCase()})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="bg-white bg-opacity-75 rounded p-2">
                  <h5 className="text-center text-black font-bold">{item}</h5>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroWithStickyNavbar;
