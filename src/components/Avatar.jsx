import React, { useState } from "react";
import { CiUser } from "react-icons/ci";

function Avatar({ src, alt }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className={"relative w-14 h-14 bg-gray-300 rounded-full p-2"}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setTimeout(() => {
        setIsShow(false)
      }, 1000)}
 
    >
      <CiUser className="w-full h-full text-stone-400" />
      <img className="object-cover bg-gray-400" src={src} alt={alt} />
      {isShow && (
        <div className={"absolute flex flex-col w-fit p-2 rounded-lg shadow-md bg-white top-12 left-6"}>
          <span className="text-stone-600 font-semibold text-sm">Abdullah Bhatti</span>
          <span className="text-stone-500 text-xs">abdullah.bhatti345@gmail.com</span>
        </div>
      )}
    </div>
  );
}

export default Avatar;
