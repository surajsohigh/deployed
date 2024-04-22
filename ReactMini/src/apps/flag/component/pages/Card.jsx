import React from "react";

function Card({ img, name, population, region, capital }) {
  return (
    <div className="max-w-xs mx-auto my-4 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <img src={img} alt={name} className="w-full h-auto" />
      <div className="border-2 border-l-neutral-500">
        <div className="p-4">
          <p className="text-xl font-semibold">{name}</p>
          <p>
            <span className="font-bold">Population: </span>
            {population}
          </p>
          <p>
            <span className="font-bold">Region: </span>
            {region}
          </p>
          <p>
            <span className="font-bold">Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
