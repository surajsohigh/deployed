// Header.js

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 py-4 px-10">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/movie" className="text-white text-xl font-bold">
          My Movie App
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/movie"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
