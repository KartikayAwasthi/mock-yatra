import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex-shrink-0 text-3xl font-extrabold cursor-pointer select-none">
            Mock Yatra
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-lg font-medium">
            <a href="/" className="hover:text-cyan-300 transition duration-300">
              Home
            </a>
            <a
              href="/test-series"
              className="hover:text-cyan-300 transition duration-300"
            >
              Test Series
            </a>
            <a
              href="/about"
              className="hover:text-cyan-300 transition duration-300"
            >
              About
            </a>
          </div>

          {/* Auth & Get Pro Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="bg-white text-teal-700 font-semibold px-4 py-1 rounded shadow hover:bg-gray-100 transition duration-300"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="bg-cyan-400 text-white font-bold px-5 py-2 rounded-lg shadow-lg hover:bg-cyan-500 transition duration-300"
              onClick={() => navigate("/get-pro")}
            >
              Get Pro
            </button>
            <button
              className="bg-teal-700 px-4 py-1 rounded hover:bg-teal-600 transition duration-300"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-500 focus:ring-white"
            >
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-700"
          id="mobile-menu"
        >
          <div className="px-4 pt-4 pb-6 space-y-2 text-white">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-semibold hover:bg-cyan-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/test-series"
              className="block px-3 py-2 rounded-md text-base font-semibold hover:bg-cyan-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Test Series
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-semibold hover:bg-cyan-500 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <div className="border-t border-cyan-400 mt-4 pt-4 space-y-2">
              <button
                className="block w-full text-left px-3 py-2 rounded-md bg-white text-teal-700 font-semibold"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/login");
                }}
              >
                Login
              </button>
              <button
                className="block w-full text-left px-3 py-2 rounded-md bg-cyan-400 hover:bg-cyan-500 text-white font-bold"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/get-pro");
                }}
              >
                Get Pro
              </button>
              <button
                className="block w-full text-left px-3 py-2 rounded-md bg-teal-700 hover:bg-teal-600 text-white font-semibold"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/signup");
                }}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
