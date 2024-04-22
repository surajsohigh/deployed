import React, { useState } from "react";
import CountryList from "./pages/CountryList";
import country from "../static/CountryData";
import { FaSearch } from "react-icons/fa";
import RegionFilter from "./RegionFilter";

function Filter() {
  const [query, setQuery] = useState("");
  const [regionValue, setRegionValue] = useState("none");

  return (
    <div>
      <section className="flex flex-col md:flex-row justify-between p-5 md:mx-8">
        {/* SearchBar */}
        <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 flex items-center">
          <div className="flex w-full border border-opacity-50 border-slate-700 rounded-md">
            <FaSearch className="m-3" />
            <input
              className="py-2 px-3 text-center rounded-md w-full"
              type="text"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              placeholder="Search For a Country..."
            />
          </div>
        </div>
        {/* SearchBar End*/}

        {/* Region Filter  */}
        <div className="w-full md:w-auto">
          <select
            name="region"
            className="px-7 py-2 w-full"
            onChange={(e) => setRegionValue(e.target.value)}
            value={regionValue}
          >
            <option value="">Filter By Region</option>
            {country.map((items) => (
              <option key={items.id} value={items.region}>
                {items.region}
              </option>
            ))}
          </select>
        </div>
        {/* Region Filter End */}
      </section>

      {regionValue === "none" ? (
        <CountryList query={query} />
      ) : (
        <RegionFilter regionValue={regionValue} />
      )}
    </div>
  );
}

export default Filter;
