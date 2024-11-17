import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleScroll = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between pr-4 py-2">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-15 h-12 object-contain" />

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-2">
          {["home", "about", "features", "placements", "testimonials", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleScroll(e, section)}
              className="px-4 py-2 rounded active:scale-95 hover:bg-customDarkBlue hover:text-white transition-all duration-200"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 text-sm bg-transparent border border-customDarkBlue text-customDarkBlue rounded hover:bg-customDarkBlue hover:text-white hover:scale-105 active:scale-105 transition-all duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 text-sm bg-customDarkBlue text-white hover:bg-transparent border border-customDarkBlue hover:text-customDarkBlue active:scale-105 rounded transition-all duration-200"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="block md:hidden text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 p-4">
          {["home", "about", "features", "placements", "testimonials", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                handleScroll(e, section);
                setMenuOpen(false);
              }}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <Link
            to="/login"
            className="block w-full text-center px-4 py-2 text-sm bg-transparent border border-customDarkBlue text-customDarkBlue rounded hover:bg-customDarkBlue hover:text-white hover:scale-105 active:scale-105 transition-all duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block w-full text-center px-4 py-2 text-sm bg-customDarkBlue text-white rounded hover:scale-105 active:scale-105 transition-all duration-200"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
