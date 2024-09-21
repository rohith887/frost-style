import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { CartItem } from './CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeCartstate } from '../redux/Slices/Cartslice';



const Cart = ({cartstate}) => {
  const cartItems=useSelector((state)=>state.cart.cart);
  const cartState=useSelector((state)=>state.cart.cartState);

  const navigate=useNavigate();
  const dispatch=useDispatch();

  return (
    <div className={`md:w-[20%] flex flex-col w-full z-99  top-0 fixed p-5 h-screen right-0 border-2 shadow-lg bg-white ${cartState ?"translate-x-0":"translate-x-full"} transition-all duration-500`}>
    <h1 className='flex items-center py-2 text-xl font-bold text-gray-800'>My Items</h1>
      <RxCross2 size={20} onClick={()=>dispatch(changeCartstate())} className='absolute top-0 right-0 cursor-pointer '/>
      {
            cartItems.length>0 ?( cartItems.map((item) => (
              <CartItem 
                 key={item.id}
                 id={item.id}
                 url={item.url}
                 name={item.name}
                 qty={item.qty}
                 size={item.size}
                 price={item.price}
                 />
          ))):<h1 className='flex items-center justify-center text-xl font-bold text-center text-gray-800'>Your Cart is Empty</h1>
      }
      <div className='mt-auto'>
        {
       cartItems.length>0 ? <h1>Total Items:{cartItems.length}</h1>:""
        }
      <button onClick={()=>navigate('/order')} className='w-full h-8 text-white bg-black rounded-md '>Check out</button>

      </div>
   
    
    </div>
  )
}

export default Cart