import React, { useState } from "react";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { useGlobalContext } from "../context/context";

function Searchbar() {
  const { appContextValue } = useGlobalContext();
  const { searchData, setSearchData } = appContextValue;

  console.log("User data", searchData);

  const handleSearch = (e) =>
    setSearchData(e.target.value == "" ? "Batman" : e.target.value);

  return (
    <form
      className="flex flex-row justify-end items-center  gap-3 mr-16 mt-10"
      action="#"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="text-4xl">
        <MdOutlineScreenSearchDesktop />
      </div>

      <input
        type="text"
        className="border-2 border-solid border-b-gray-800 border-l-gray-800  p-2 rounded-md font-semibold "
        placeholder={searchData}
        onChange={handleSearch}
      />
    </form>
  );
}

export default Searchbar;
