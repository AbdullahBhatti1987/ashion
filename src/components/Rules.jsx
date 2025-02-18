import React from "react";
import data from "../content/data";

function Rules() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 border lg:py-12 py-8 ">
      {data.rules.map((item, ind) => (
        <div key={ind} className="flex gap-4 justify-start pl-12 items-center">
          <item.icon className="text-4xl text-red-600"/>
          <div className="flex flex-col justify-between items-start">
            <span className="font-bold">{item.name}</span>
            <span>{item.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rules;
