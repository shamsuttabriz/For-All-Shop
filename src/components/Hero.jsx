import React, { useState } from "react";
import HeroImage from "../assets/banner.png";
import Button from "./ui/Button";

function Hero({ handleSearch }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="py-12">
      <img
        className="w-full mx-auto md:max-w-lg"
        src={HeroImage}
        alt="Banner"
      />
      <div className="text-center">
        <h1 className="font-thin text-5xl md:text-7xl text-gray-900 mt-5">
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-500 mb-10 py-4 md:px-24">
          Best place to browse, search, view details and purchase of top
          flagship phones <br className="hidden md:block" /> of the current time
          - FlasgshipFaceOff
        </p>
        <form
          onSubmit={(e) => {
            handleSearch(e, searchText);
          }}
          className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24"
        >
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search Phone by Name"
            className="bg-white border border-gray-300 rounded shadow-md w-2/3 px-4 py-3 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0"
          />
          <Button type={"submit"} level={"Search"} />
        </form>
      </div>
    </div>
  );
}

export default Hero;
