import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import TopIcons from "./TopIcons";
import data from "../content/data";
import { IoMdClose } from "react-icons/io";
import SearchBox from "./SearchBox";
import Avatar from "./Avatar";
import { UserContext } from "../Context/UserContext";
import LoginnRegButton from "./LoginnRegButton";

function Sidebar({ isSideBar, setIsSideBar, array }) {
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const { user, setUser, isLogin, setIsLogin } = useContext(UserContext);

  const handleMenu = () => {
    isSideBar ? setIsSideBar(false) : setIsSideBar(true);
  };

  const handleSearch = () => {
    isSearch ? setIsSearch(false) : setIsSearch(true);
  };

  const findSearch = () => {
    console.log("SearchItem=>", searchItem);
    setSearchItem("");
  };

  return (
    <div
     
      className={`fixed z-50 bg-gray-100/90 h-screen w-[300px] top-0 bottom-0 py-2 transition-transform duration-500 flex gap-4 lg:flex-row flex-col lg:hidden ${
        isSideBar ? "translate-x-0" : "-translate-x-[300px]"
      } `}
    >
      <div className="w-full flex justify-between items-center px-6">
        <img src={data.header.logo} className="min-w-24" alt="" />
        <button
          className={"visible lg:hidden border-2 p-2 border-slate-400 rounded-md shadow-md active:shadow-sm"}
          onClick={handleMenu}
        >
          <IoMdClose />
        </button>
      </div>
      <div className="relative flex flex-col gap-4 justify-center items-center px-6 ">
        {!isLogin ? <Avatar /> : 
        <LoginnRegButton />
      }
      <TopIcons array={data.header.icons} onClick={handleSearch} className={""} />
        
        
        <SearchBox
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value), console.log(e.target.value);
          }}
          isSearch={isSearch}
          onClick={findSearch}
          className={`
            flex lg:hidden order-2 w-full
            ${isSearch ? "translate-x-0 relative " : "-translate-x-[100%] top-14"}
          `}
        />
      </div>

      <ul className={"flex gap-1 flex-col justify-center items-start p-4 text-gray-600 order-3 "}>
        <li onClick={handleMenu}>
          <Link
            to={`/`}
            className="uppercase hover:ml-2 transition-all duration-200  w-full hover:text-orange-500 hover:bg-gray-200/50 rounded-md pl-2"
          >
            Home
          </Link>
        </li>
        {array.map((item, ind) => (
          <li
            onClick={handleMenu}
            key={ind}
            className="uppercase hover:ml-2 transition-all duration-200 hover:text-orange-500 w-full hover:bg-gray-200/50 rounded-md pl-2"
          >
            <Link className="tracking-wider" to={item.slug}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
