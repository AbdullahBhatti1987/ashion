import React, { useState } from "react";
import data from "../content/data";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log(email);
    setEmail("");
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-10/12 w-11/12 gap-6 my-6 mx-auto">
      <div className="w-full flex gap-4 flex-col pb-4">
        <img src={data.footer.image} className="w-fit" alt="" />
        <span>{data.footer.content}</span>
        <div className="flex gap-4 items-center">
          {data.footer.payment.map((item, ind) => (
            <button
              key={ind}
              onClick={() => console.log(item.slug)}
              className="p-2 bg-gray-400 rounded-full text-white lg:text-xl text-md"
            >
              {<item.icon />}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-start w-full ">
        {data.footer.categories.map((item, ind) => (
          <div key={ind} className="w-1/2 flex-col flex gap-4">
            <span className="text-lg font-bold">{item.listName}</span>
            <ul>
              {item.category.map((item, ind) => (
                <li key={ind} className="uppercase">
                  <Link to={item.slug}>{item.listItem}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-4">
      {/* <div className="w-full grid col-span-2 justify-between items-center  lg:flex flex-col lg:justify-end gap-4"> */}
        <span className="uppercase text-lg font-bold">newsletter</span>
        <div className="flex relative rounded-full w-full border-2  overflow-hidden">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full min-w-56 py-2 px-4 rounded-tl-full rounded-bl-full focus:outline-none bg-white z-10"
          />
          <button
            onClick={handleSubscribe}
            className="justify-end uppercase bg-red-500 font-semibold py-2 px-4 rounded-full z-20"
          >
            subscribe
          </button>
        </div>
        <div className="flex gap-4 items-center">
          {data.footer.newsletter.map((item, ind) => (
            <button
              key={ind}
              onClick={() => console.log(item.slug)}
              className="p-2 bg-gray-400 rounded-full text-white lg:text-xl text-md"
            >
              {<item.icon />}
            </button>
          ))}
        </div>
      {/* </div> */}
      </div>
      
    </div>
  );
}

export default Footer;
