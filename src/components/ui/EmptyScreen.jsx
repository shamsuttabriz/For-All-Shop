import React from "react";
import { Link } from "react-router";
import Button from "./Button";

function EmptyScreen() {
  return (
    <div className="py-24 text-center">
      <h1 className="mb-3 text-5xl md:text-7xl font-light text-gray-900">
        No Data Found in Favorite Page
      </h1>
      <p className="my-8 text-xl text-gray-900 md:text-2xl">
        Browse, Search Phones, Add to Cart, Favorites.
      </p>
      <Link to="/">
        <Button level="Browse Phone" />
      </Link>
    </div>
  );
}

export default EmptyScreen;
