import React from "react";
import { Outlet } from "react-router";

export default function Favorite() {
  return (
    <>
      <div className="text-center text-4xl">This is Favorite pages</div>
      <Outlet />
    </>
  );
}
