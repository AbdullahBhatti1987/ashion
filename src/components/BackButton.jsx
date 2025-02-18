import React from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from 'react-router';

function BackButton() {
    const navigate = useNavigate();
  return (
    <div onClick={()=> navigate("/")} className='relative w-12 h-12 bg-gray-300 text-center p-4 rounded-full flex justify-center items-center'>
        <button className='absolute text-center pl-2'><MdArrowBackIos /></button>
        </div>
  )
}

export default BackButton