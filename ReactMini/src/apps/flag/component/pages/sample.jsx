import React from "react";
import country from "../../static/CountryData";
import Card from "./Card";

function CountryList({ query }) {
  // Filter countries based on query
  let filteredCountries = country.filter((item) =>
    item.name.common.toLowerCase().includes(query)
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">
      {filteredCountries.map((item) => (
        <div key={item.id}>
          <a href="#" onClick={() => console.log("Clicked", item)}>
            <img src={item.flags.png} alt="" className="w-full h-auto" />
          </a>
          <div className="border-2 border-l-neutral-500">
            <div className="m-3">
              <p className="text-xl font-semibold">{item.name.common}</p>
              <p>
                <span className="font-bold">Population: </span>
                {item.population}
              </p>
              <p>
                <span className="font-bold">Region: </span>
                {item.region}
              </p>
              <p>
                <span className="font-bold">Capital: </span>
                {item.capital}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountryList;
