// import React, { useEffect, useRef, useState } from "react";
// import data from "../content/data";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// function Slider() {
//   const [array, setArray] = useState([]);
//   const [width, setWidth] = useState();
//   const [isLoading, setIsLoading] = useState(false);

//   let containerRef = useRef(0);

//   useEffect(() => {
//     setIsLoading(true);
//     try {
//      { data.slider.map((item, ind) => array.push(item));}
//       setIsLoading(false);
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//     }
//   }, []);

//   const handlePrevious = () => {
//     const firstPic = array.slice(array[0]);
//     array.shift();
//     array.push(firstPic[0]);
//     setArray((pre) => [...pre]);
//   };

//   const handleNext = () => {
//     const lastPic = array.slice(array.length - 1);
//     array.pop();
//     array.unshift(lastPic[0]);
//     setArray((pre) => [...pre]);
//   };

//   return (
//     <div className="w-full flex justify-between items-center gap-4 lg:px-[5%]">
//       <button className="text-2xl drop-shadow-2xl" onClick={handlePrevious}>
//         <MdChevronLeft />
//       </button>
//       <div className="w-[100%] relative flex items-center overflow-x-hidden  scroll-smooth">
//         <div ref={containerRef} className={"flex w-full"}>
//           {isLoading ? <span>Loading...</span> : array.map((item, ind) => (
//             <div key={ind} className={"w-[20%] flex gap-2 cursor-pointer transition-all ease-in-out duration-300"}>
//               <img src={item} alt="" className="w-full h-full object-cover" />
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="text-2xl drop-shadow-2xl" onClick={handleNext}>
//         <MdChevronRight />
//       </button>
//     </div>
//   );
// }

// export default Slider;

import React, { useEffect, useRef, useState } from "react";
import data from "../content/data";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Slider() {
  const [array, setArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      setArray(data.slider);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  const handlePrevious = () => {
    if (array.length > 0) {
      const updatedArray = [...array];
      const firstPic = updatedArray.shift();
      updatedArray.push(firstPic);
      setArray(updatedArray);
    }
  };

  const handleNext = () => {
    
    if (array.length > 0) {
      const updatedArray = [...array];
      const lastPic = updatedArray.pop();
      
      updatedArray.unshift(lastPic);
      setArray(updatedArray);
    }
  };

  return (
    <div className="w-full flex justify-between items-center gap-4 lg:px-[5%]">
      <button className="text-2xl drop-shadow-2xl" onClick={handlePrevious}>
        <MdChevronLeft />
      </button>
      <div className="w-[100%] relative flex items-center overflow-x-hidden scroll-smooth">
        <div ref={containerRef} className="flex w-full transition-transform duration-300 ease-linear scroll-smooth translate-x-0">
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            array.map((item, ind) => (
              <div key={ind} className="w-[20%] flex gap-2 cursor-pointer transition-all ease-in-out duration-300">
                <img src={item} alt={`slide-${ind}`} className="w-full h-full object-cover" />
              </div>
            ))
          )}
        </div>
      </div>
      <button className="text-2xl drop-shadow-2xl" onClick={handleNext}>
        <MdChevronRight />
      </button>
    </div>
  );
}

export default Slider;
