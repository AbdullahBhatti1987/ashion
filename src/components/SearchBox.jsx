import React from 'react'
import { CiSearch } from "react-icons/ci";

function SearchBox({value, onChange, onClick, className }) {
  return (
    <div
    className={`w-full h-10 border rounded-md overflow-hidden border-slate-300 justify-center items-center transition-all duration-300 absolute ${className}`}
   
  >
    <input
      type="text"
      value={value}
      className="outline-0.5 outline-slate-400 rounded-md flex-1 h-full px-4 text-xl"
     onChange={onChange}
    />
    <button
      onClick={onClick}
      className="absolute right-0 bg-slate-300 px-6 h-full rounded-tr-md rounded-br-md"
    >
      <CiSearch />
    </button>
  </div>
  )
}

export default SearchBox