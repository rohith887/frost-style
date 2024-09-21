import React, { useState } from "react";
// import { CgProfile } from "react-icons/cg";
import { IoBagHandleOutline } from "react-icons/io5";
// import Cart from './Cart';
import { useDispatch } from "react-redux";
import { changeCartstate } from "../redux/Slices/Cartslice";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const dispatch = useDispatch();
  const [nav, setnav] = useState(true);
  // const auth=useSelector((state)=>state.auth.isAuth);
  const handlenav = () => {
    setnav(!nav);
  };
  return (
    <>
      <div className="fixed top-0 z-50 items-center justify-between w-full h-16 bg-white md:flex">
        <div className="p-4 ">
          <h1 className="hidden text-2xl font-bold md:flex ">FrostStyle.</h1>
        </div>
        <div className="items-center hidden gap-5 md:flex md:mr-20">
          <div className="flex items-center gap-10">
            <Link to="/home">
              <h1 className="font-semibold text-black">Home</h1>
            </Link>
            <Link to="/mens-wear">
              <h1 className="font-semibold text-black">Men</h1>
            </Link>
            <Link to="/women-wear">
              <h1 className="font-semibold text-black">Women</h1>
            </Link>
          </div>
          <Link to="/login">
            <button className="w-auto h-8 px-2 text-white bg-black rounded-md">
              Log out
            </button>
          </Link>
          {/* <CgProfile size={25}/> */}
          <IoBagHandleOutline
            size={25}
            className="cursor-pointer"
            onClick={() => dispatch(changeCartstate())}
          />
        </div>

        {/* <Cart cartstate={handlecart}/> */}
        {/*This is for mobile view */}


        <div
          className={
            !nav
              ? "h-auto w-full left-0 top-0  bg-white border-r-gray-500 "
              : "fixed left-[-100%]"
          }
        >
        
          <ul className="flex flex-col md:hidden">
          <div className="p-4 ">
          <h1 className="fixed left-0 block pl-[16px] text-2xl font-bold top-[16px] text-black md:hidden ">FrostStyle.</h1>
        </div>
            
            <div className=" fixed right-12 block pr-5 top-[16px] text-black md:hidden">
            <IoBagHandleOutline
              size={25}
              className="cursor-pointer"
              onClick={() => 
                {
                  dispatch(changeCartstate())
                   
                }}
            />
            </div>
            <div
              onClick={handlenav}
              className=" fixed right-2 block px-5 top-[20px] text-black md:hidden"
            >
              {!nav ? (
                <AiOutlineClose size={20} />
              ) : (
                <AiOutlineMenu size={20} />
              )}
            </div>
            <Link to="/home">
              <h1 className="p-4 font-semibold text-black border-b border-gray-300 shadow-sm cursor-pointer">
                Home
              </h1>
            </Link>
            <Link to="/mens-wear">
              <h1 className="p-4 font-semibold text-black border-b border-gray-300 shadow-sm cursor-pointer">
                Men
              </h1>
            </Link>
            <Link to="/women-wear">
              <h1 className="p-4 font-semibold text-black border-b border-gray-300 shadow-sm cursor-pointer">
                Women
              </h1>
            </Link>

            <Link to="/login">
              <button className="w-auto h-8 px-2 m-2 text-white bg-black rounded-md">
                Log out 
              </button>
            </Link>
            {/* <CgProfile size={25}/> */}
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
