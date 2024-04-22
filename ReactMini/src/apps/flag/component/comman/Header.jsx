import React from "react";
import { FiMoon } from "react-icons/fi";

function Header() {
  return (
    <div className="mt-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-semibold p-6 text-center">
        Where in the World?
      </h2>
      <div className="flex justify-end items-center gap-3 p-4 sm:p-5 lg:p-6 font-semibold">
        <FiMoon className="mt-1 text-xl" />
        <p>Dark Mode</p>
      </div>
    </div>
  );
}

export default Header;
