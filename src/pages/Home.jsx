import React from "react";
import Hero from "../components/Hero";
import PhonesContainer from "../components/PhonesContainer";
import { useLoaderData } from "react-router";

function Home() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Hero />
      <PhonesContainer phones={data} />
    </div>
  );
}

export default Home;
