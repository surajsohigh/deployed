import React from "react";
import country from "../../static/CountryData";
import Card from "./Card";

function CountryList({ query }) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10 items-center justify-items-center">
      {country
        .filter((item) => item.name.common.toLowerCase().includes(query))
        .map((item) => {
          return (
            <Card
              key={item.id} // Added key prop for iteration
              id={item.id}
              img={item.flags.png}
              name={item.name.common}
              population={item.population}
              capital={item.capital}
              region={item.region}
            />
          );
        })}
    </div>
  );
}

export default CountryList;
