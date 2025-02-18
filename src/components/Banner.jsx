import React from "react";
import data from "../content/data";
import { useNavigate } from "react-router";

function Banner() {
  const firstBox = data?.banner?.filter((item) => item.id == 1);
  const secondBox = data?.banner?.filter((item) => item.id > 1);

  const navigate = useNavigate();

  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 mx-auto ">
        <div className="relative w-full shadow-md overflow-hidden" onClick={() => navigate(firstBox[0]?.slug)}>
          <img src={firstBox[0]?.image} className="object-cover w-full transition-all duration-300 ease-in-out hover:scale-105" />
          <div className={"absolute lg:bottom-20 lg:left-20 md:bottom-10 md:left-10 bottom-5 left-5 opacity-75 p-4 rounded-xl"}
          style={{ backgroundColor: firstBox[0]?.className }}>
            <h1 className="lg:text-4xl md:text-xl text-lg uppercase">{firstBox[0]?.heading}</h1>
            <p className="lg:text-lg md:text-md text-sm">{firstBox[0]?.items}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gird-cols-1 gap-2">
          {secondBox?.map((item, index) => (
            <div
              className={"relative w-full h-full flex justify-center items-center overflow-hidden"}
              key={index}
              onClick={() => navigate(item.slug)}
            >
              <img src={item.image} className="object-cover w-full transition-all duration-300 ease-in-out hover:scale-105" alt={""} />
              <div
                className={"absolute bottom-5 left-5 opacity-75 p-4 rounded-xl"}
                style={{ backgroundColor: item?.className }}
             >
                <h1 className="lg:text-xl md:text-xl text-lg uppercase">{item?.heading}</h1>
                <p className="lg:text-md md:text-md text-sm">{item?.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
