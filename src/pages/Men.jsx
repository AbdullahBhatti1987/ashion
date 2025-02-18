import React from "react";
import data from "../content/data";
import Card from "../components/Card";

function Men() {
  return (
    <div className="lg:w-10/12 w-full lg:px-0 px-6 mx-auto flex flex-col gap-6 py-6 overflow-hidden">
      <h1 className="text-2xl font-bold uppercase">Men's Collection</h1>
     <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {data.products.filter((item, ind)=> item.category === "men" )?.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Men;
