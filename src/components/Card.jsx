import React from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

function Card({ product }) {
  const iconClass =
    "p-3 bg-white rounded-full text-black transition-all duration-500 ease-in-out hover:rotate-[360deg] hover:bg-red-500 hover:text-white";

  return (
    <div className={"relative  shadow-md flex flex-col  gap-2 p-4 overflow-hidden"}>
      <div className="relative overflow-hidden transition-all translate-y-2 group flex justify-center">
        <img src={product?.image} alt="" className="transition-all hover:scale-125 duration-300 ease-in-out" />

        <div className="absolute lg:-bottom-16 -bottom-12 flex justify-between mx-autoitems-center gap-4 z-20 opacity-90 transition-all duration-300 ease-in-out lg:group-hover:bottom-10 group-hover:bottom-8">
          <span className={iconClass}>
            <BsArrowsAngleExpand className="lg:w-6 lg:h-6 md:w-4 md:h-4 w-3 h-3" />
          </span>
          <span className={iconClass}>
            <CiHeart className="lg:w-6 lg:h-6 md:w-4 md:h-4 w-3 h-3" />
          </span>
          <span className={iconClass}>
            <CiMoneyBill className="lg:w-6 lg:h-6 md:w-4 md:h-4 w-3 h-3" />
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 mt-4 text-stone-600">
        <span className="uppercase text-stone-500 truncate">{product?.name}</span>
        <span className="uppercase text-stone-400">{product?.category}</span>
      </div>
      <div className="flex justify-start items-center gap-2 text-stone-600">
        <span className="line-through text-stone-400">Rs.{product?.oldprice}</span>
        <span className="text-red-500 font-semibold">Rs.{product?.newprice}</span>
      </div>
    </div>
  );
}

export default Card;
