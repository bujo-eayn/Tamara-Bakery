import React, { useState, useEffect } from "react";

const HeroWithStickyNavbar = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const heroHeight = document.getElementById("hero").clientHeight - 50; // Adjusting for overlap
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
          isSticky ? "bg-transparent" : "bg-transparent"
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
          <div className="flex space-x-4 justify-center">
            {/* Links now have conditional classes for background change */}
            <a
              href="#"
              className={`py-2 px-4 rounded-lg ${
                isSticky
                  ? "bg-red-500 text-white"
                  : "bg-white bg-opacity-50 text-black"
              } transition-colors duration-300`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`py-2 px-4 rounded-lg ${
                isSticky
                  ? "bg-red-500 text-white"
                  : "bg-white bg-opacity-50 text-black"
              } transition-colors duration-300`}
            >
              About
            </a>
            <a
              href="#products"
              className={`py-2 px-4 rounded-lg ${
                isSticky
                  ? "bg-red-500 text-white"
                  : "bg-white bg-opacity-50 text-black"
              } transition-colors duration-300`}
            >
              Products
            </a>
            <a
              href="#team"
              className={`py-2 px-4 rounded-lg ${
                isSticky
                  ? "bg-red-500 text-white"
                  : "bg-white bg-opacity-50 text-black"
              } transition-colors duration-300`}
            >
              Team
            </a>
            <a
              href="#contact"
              className={`py-2 px-4 rounded-lg ${
                isSticky
                  ? "bg-red-500 text-white"
                  : "bg-white bg-opacity-50 text-black"
              } transition-colors duration-300`}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div
        id="hero"
        className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url(https://source.unsplash.com/random)" }}
      >
        <h1 className="text-white text-5xl font-bold text-center">
          Welcome to Our Bakery
        </h1>
        <p className="text-white text-xl text-center mt-4">
          Explore our world of freshly baked goodies
        </p>
      </div>
      {/* Small cards for baked goods */}
      <div className="flex justify-center space-x-4 -mt-12">
        {["Cakes", "Muffins", "Pastries", "Desserts", "Breads"].map(
          (item, index) => (
            <div
              key={index}
              className="w-32 h-32 bg-white rounded-lg shadow-lg p-2 flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(https://source.unsplash.com/featured/?${item.toLowerCase()})`,
                backgroundSize: "cover",
              }}
            >
              <div className="bg-white bg-opacity-75 rounded p-1">
                <h5 className="text-center text-black font-bold">{item}</h5>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HeroWithStickyNavbar;

      {
        /* Add hover effect on the links for sections */
      }
