import React from "react";
import Banner from "../components/Banner";
import NewProducts from "../components/NewProducts";
import Categories from "../components/Categories";
import Rules from "../components/Rules";
import Slider from "../components/Slider";

function Home() {
  return (
    <>
      <div className="lg:w-10/12 w-full lg:px-0 px-6 mx-auto flex flex-col gap-10 py-6 overflow-hidden">
        <Banner />
        <NewProducts />
        <Categories />
        <Rules />
      </div>
      <div className="w-full lg:px-0 px-6 mx-auto flex flex-col gap-10 py-6 overflow-hidden">
        <Slider />
      </div>
    </>
  );
}

export default Home;
