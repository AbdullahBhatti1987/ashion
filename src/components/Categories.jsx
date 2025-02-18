import React from "react";
import data from "../content/data";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {data.categories.map((item, ind) => (
        <div key={item.id} className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold uppercase ">{item.name}</h1>
          <div className="flex flex-col gap-4">
          {item.products.map((item, ind) => (
            <CategoryCard key={ind} product={item} />
          ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
