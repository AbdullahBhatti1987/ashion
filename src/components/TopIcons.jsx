import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function TopIcons({ array, onClick, className }) {
  return (
    <div
      className={`lg:order-3 order-2 gap-4 lg:w-1/4 w-full flex lg:flex-row flex-col lg:justify-end justify-center items-center ${className}`}
    >
      
      <ul className="flex gap-4 justify-end order-2">
        <button onClick={onClick} className="text-xl hoverText transition-text duration-200 ease-in-out z-50">
          <CiSearch />
        </button>
        {array.map((item, ind) => (
          <li key={ind}>
            <Link to={item.slug} className="relative text-xl hoverText transition-text duration-200 ease-in-out">
              <item.icon />
              <span className="absolute -top-2 -right-2 text-xs bg-black rounded-full text-white w-4 h-4 text-center font-semibold">
                2
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopIcons;
