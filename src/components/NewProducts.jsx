import React, { useEffect, useState } from "react";
import data from "../content/data";
import Card from "./Card";

function NewProducts() {
  const [selectCategory, setSelectCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("selectCategory=>", selectCategory);
  }, [selectCategory]);

  return (
    <div className="">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-2 ">
        <h1 className="uppercase text-2xl font-semibold text-start w-full  ">New Products</h1>
        <ul className="flex justify-between self-end items-center w-full  mb-6">
          {data.newProduct.map((item, ind) => (
            <li key={ind}>
              <button
                className="uppercase text-sm cursor-pointer hoverText "
                onClick={() => setSelectCategory(item.category)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {selectCategory == "all"
          ? data.products
              .filter((item, ind) => item.create >= 20250101)
              .map((item) => <Card key={item.id} product={item} />)
          : data.products
              .filter((item, ind) => item.category == selectCategory && item.create >= 20241001)
              .map((item) => <Card key={item.id} product={item} />)}
      </div>
    </div>
  );
}

export default NewProducts;
