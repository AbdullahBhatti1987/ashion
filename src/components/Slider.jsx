import React, { useEffect } from "react";
import data from "../content/data";
import { TfiInstagram } from "react-icons/tfi";

function Slider() {
  useEffect(() => {}, []);

  return (
    <div className="w-full">
        <div className="w-[100%] flex">
          {data.slider.map((item, ind) => (
            <div key={ind} className="group relative lg:w-[20%] running">
              <img src={item} alt={`Slider${ind}`} className="w-full h-full object-cover" />
              <div className="absolute flex flex-col top-0 hover:bg-slate-50/50 w-full h-full group-hover:visible justify-center items-center transition-all duration-300 ease-in-out">
                <TfiInstagram className="font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
                <span className="font-bold opacity-0 group-hover:opacity-100  transition-all duration-300 ease-in-out">
                  @_ashio_shop
                </span>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Slider;
