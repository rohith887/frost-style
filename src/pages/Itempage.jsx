import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addtoCart } from '../redux/Slices/Cartslice';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import toast from 'react-hot-toast';

const Itempage = () => {
  const location = useLocation();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [size,setsize]=useState("");
  const { id, url, name, price, des } = location.state;

  const handleSize=(e)=>{

    setsize(e.target.id);

  }

  return (
    <div className='w-full h-full'>

    <Navbar/>
    <Cart/>
    <div className='w-auto md:w-[60%] mt-32 mx-auto justify-center items-center flex'>
      <div className='flex-wrap items-center justify-center h-full gap-20 border-2 rounded-md md:p-10 md:flex'>
        <div className='flex items-center justify-center p-5 md:p-0'>
          <img src={url} className='w-[300px] h-[400px] rounded-md hover:scale-110 transition-all duration-300 ease-in-out' alt='product_image' />
        </div>
        <div className='flex flex-col items-center w-auto gap-5 '>
          <h1 className='mt-5 text-2xl font-bold leading-6 font-assistant text-rgb-40-44-63'>{name}</h1>
          <p className='text-base font-normal leading-normal font-assistant text-rgb-83-86-101'>{des}</p>
          <h1 className='mt-5 text-2xl font-bold leading-6 text-rgb-40-44-63'>₹{price}</h1>
          <div className='mt-10'>
            <h1 className='text-base font-bold leading-4 text-center'>SELECT SIZE</h1>
            <div className='gap-2 mt-5'>
                    <div className='flex gap-2'>
                       <h1 id="S" onClick={handleSize} className={`border-2 w-[35px] h-[35px] items-center flex justify-center rounded-full border-black transition-all ease-linear ${
                        size==='S'?'bg-black text-white':'bg-gray-100 text-black'
                       } `}>S</h1>
                       <h1 id="M" onClick={handleSize} className={`border-2 w-[35px] h-[35px] items-center flex justify-center rounded-full border-black transition-all ease-linear ${
                        size==='M'?'bg-black text-white':'bg-gray-100 text-black'
                       } `}>M</h1>
                        <h1 id="L" onClick={handleSize} className={`border-2 w-[35px] h-[35px] items-center flex justify-center rounded-full border-black transition-all ease-linear ${
                        size==='L'?'bg-black text-white':'bg-gray-100 text-black'
                       } `}>L</h1>
                        <h1 id="XL" onClick={handleSize} className={`border-2 w-[35px] h-[35px] items-center flex justify-center rounded-full border-black transition-all ease-linear ${
                        size==='XL'?'bg-black text-white':'bg-gray-100 text-black'
                       } `}>XL</h1>
                        <h1 id="XXL" onClick={handleSize} className={`border-2 w-[35px] h-[35px] items-center flex justify-center rounded-full border-black transition-all ease-linear ${
                        size==='XXL'?'bg-black text-white':'bg-gray-100 text-black'
                       } `}>XXL</h1>
                       
                    </div>
                   </div>
          </div>
          <button
            onClick={() => {
              dispatch(addtoCart({ id, url, name, price,size, qty: 1 }));
              toast.success("Item added to Cart");
              navigate(`/mens-wear`);
            }}
            className='flex items-center justify-center w-40 h-12 mt-10 transition-all ease-in-out bg-gray-100 border-2 rounded-md hover:text-white hover:bg-black '
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Itempage;
