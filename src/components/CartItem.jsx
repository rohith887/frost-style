import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removefromCart,
} from "../redux/Slices/Cartslice";

export const CartItem = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[80px] flex p-2 border-2 border-gray-200 shadow-md rounded-lg bg-white justify-between">
      <div className="flex items-center justify-between gap-2">
        <img
          src={props.url}
          className="w-[60px] h-[60px] rounded-md "
          alt="productimage"
        />
        <div className="">
          <h1 className="font-bold text-gray-900 ">{props.name}</h1>
          
          <span className="font-bold text-black">₹ {props.price}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center ">
        <div className="flex justify-end ">
          <RiDeleteBin6Line
            onClick={() =>
              dispatch(
                removefromCart({
                  id: props.id,
                  url: props.url,
                  name: props.name,
                  price: props.price,
                  size:props.size,
                  qty: props.qty,
                })
              )
            }
            className="transition-all ease-linear cursor-pointer hover:text-red-500 "
          />
        </div>
        <div className="flex items-center justify-between gap-1">
          <AiOutlinePlus
            onClick={() =>
              dispatch(
                incrementQty({
                  id: props.id,
                  url: props.url,
                  name: props.name,
                  price: props.price,
                  size:props.size,
                  qty: props.qty,
                })
              )
            }
            className="p-1 text-xl transition-all ease-linear border-2 border-gray-600 rounded-md cursor-pointer hover:text-white hover:bg-black hover:border-none"
          />
          <span>{props.qty}</span>
          <AiOutlineMinus
            onClick={() =>
              dispatch(
                decrementQty({
                  id: props.id,
                  url: props.url,
                  name: props.name,
                  price: props.price,
                  size:props.size,
                  qty: props.qty,
                })
              )
            }
            className="p-1 text-xl transition-all ease-linear border-2 border-gray-600 rounded-md cursor-pointer hover:text-white hover:bg-black hover:border-none"
          />
        </div>
        <h3>Items:</h3>
      </div>
    </div>
  );
};
