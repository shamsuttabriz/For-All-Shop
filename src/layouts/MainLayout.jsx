import React from "react";

function MainLayout() {
  return (
    <>
      <h1 className="text-5xl text-center mb-10">Navbar</h1>
      <Outlet />
      <h1 className="text-5xl text-center mt-10">Footer</h1>
    </>
  );
}

export default MainLayout;
