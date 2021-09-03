import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="bg-white  shadow">
      <div className=" container w-full  mx-auto navbar ">
        <div className="w-full h-full flex  justify-between items-center">
        <div className=" width-auto">
          <ul className="flex w-full justify-around items-center h-full">
            <li className="px-7">
              {" "}
              <Link>HOME </Link>{" "}
            </li>
            <li  className="px-7">
              {" "}
              <Link>ABOUT US </Link>{" "}
            </li>
            <li  className="px-7">
              {" "}
              <Link>DIET PLANS </Link>{" "}
            </li>
            <li  className="px-7">
              {" "}
              <Link> SET YOUT PLANS </Link>{" "}
            </li>
          </ul>
          </div>
          <Link>
          <img src="" />
          </Link>
        
          <ul className=" flex ">
              <li className="px-7">
                  <Link>
                  <button className=" bg-transparent outline-none p-3"> Sign In </button>
                  </Link>
              </li>
              <li className="px-7">
                  <Link>
                  <button className=" bg-black text-white outline-none px-14 pt-3 pb-3 rounded"> Register </button>
                  </Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
