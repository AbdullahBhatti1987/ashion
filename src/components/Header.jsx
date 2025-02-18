import React, { useEffect, useState } from "react";
import data from "../content/data";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import Sidebar from "./Sidebar";
import TopIcons from "./TopIcons";
import SearchBox from "./SearchBox";
import LoginnRegButton from "./LoginnRegButton";

function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const handleMenu = () => {
    isSideBar ? setIsSideBar(false) : setIsSideBar(true);
  };
  const handleSearch = () => {
    setSearchItem("");
    setIsSearch(!isSearch);
  };
  const findSearch = () => {
    console.log("SearchItem=>", searchItem);
    setSearchItem("");
  };

  useEffect(() => {
    setIsMenu(false);
  }, []);

  return (
    <div className="sticky top-0 w-full bg-slate-200 h-12 z-50">
      <div className="flex lg:w-10/12 w-full lg:px-0 px-6 mx-auto justify-between items-center h-full ">
        <div className="lg:w-1/4 w-full  flex justify-between items-center h-full">
          <img src={data.header.logo} className="min-w-24" alt="" />
          <button className={ "visible lg:hidden border-2 text-xl p-1.5 border-slate-400 rounded-md shadow-md active:shadow-sm"} onClick={handleMenu}><CiMenuBurger /></button>
        </div>
        <div className="lg:flex lg:w-2/4 justify-center items-center relative z-50">
          <div className={`w-full ${!isSearch ? "flex" : "hidden"} justify-center items-center`}>
            <ul className="lg:flex flex-row justify-center items-center hidden">
              <li className="uppercase text-gray-600 transition-all hoverText lg:p-2 p-1 hover:-translate-y-0.5 active:-translate-y-0.5 ">
                <Link to={`/`} className="tracking-wider">
                  Home
                </Link>
              </li>
              {data.header.navbar.map((item, ind) => (
                <li key={ind} className="uppercase text-gray-600 transition-all hoverText lg:p-2 p-1 hover:-translate-y-0.5 active:-translate-y-0.5 ">
                  <Link className="tracking-wider" to={item.slug}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <SearchBox
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value), console.log(e.target.value);
            }}
            isSearch={isSearch}
            onClick={findSearch}
            className={`
              lg:flex hidden transition-all duration-300 ease-in-out 
              ${isSearch ? "w-[100%]" : " w-[0%] invisible" 
              }`}
             
          />
        </div>
        <div className="lg:flex lg:w-1/4 justify-end   items-center gap-6 relative z-50">
        <LoginnRegButton className={"lg:flex hidden"}/>
        <TopIcons array={data.header.icons} onClick={handleSearch} className={"lg:flex hidden"} />
        </div>
      </div>
      <Sidebar isSideBar={isSideBar} setIsSideBar={setIsSideBar} array={data.header.navbar} />
    </div>
  );
}

export default Header;
