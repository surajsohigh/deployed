import React from "react";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-red-500 w-full rounded-md">
        <h2 className="text-4xl text-center p-4 font-semibold ">
          React Mini Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div>
          <a href="/balancer">
            <button className="w-full px-7 py-3 border-2 rounded-md bg-indigo-300">
              Balancer
            </button>
          </a>
        </div>

        <div>
          <a href="/bgtheme">
            <button className="w-full px-7 py-3 border-2 rounded-md bg-indigo-300">
              Switch BG-Theme
            </button>
          </a>
        </div>

        <div>
          <a href="/todo">
            <button className="w-full px-7 py-3 border-2 rounded-md bg-indigo-300">
              Todo
            </button>
          </a>
        </div>

        <div>
          <a href="/createpassword">
            <button className="w-full px-7 py-3 border-2 rounded-md bg-indigo-300">
              Generate Password
            </button>
          </a>
        </div>

        <div>
          <a href="/movie">
            <button className="w-full px-7 py-3 border-2 rounded-md bg-indigo-300">
              Find Movie
            </button>
          </a>
        </div>

        <div>
          <a href="/currency">
            <button className="w-full px-7 py-3 border-2 rounded-md bg-indigo-300">
              Currency Converter
            </button>
          </a>
        </div>
        <div>
          <a href="/flag">
            <button className="w-full px-7 py-3 border-2 rounded-md bg-indigo-300">
              Flag
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
