import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Itemcard = (props) => {
  const navigate = useNavigate();
  const cartState=useSelector((state)=>state.cart.cartState);
  const navigateToItemPage = () => {
    navigate(`/item/${props.id}`, {
      state: {
        id: props.id,
        url: props.url,
        name: props.name,
        price: props.price,
        des: props.des,
      },
    });
  };

  return (
    <div
      onClick={navigateToItemPage}
      id={props.id}
      className='w-[300px] p-2 font-bold  flex flex-col rounded-lg bg-white '
    >
      <img
        className='w-auto transition-all duration-500 ease-in-out rounded-md cursor-pointer z-1 hover:scale-110'
        src={props.url}
        alt='jacket'
        style={{ pointerEvents: cartState?'none':'auto' }}
      />
      <div className='mt-5'>
        <h1 className='text-sm'>{props.name}</h1>
        <p className='text-sm font-normal'>{props.des.slice(0, 30)}...</p>
        <span>₹ {props.price}</span>
      </div>
    </div>
  );
};

export default Itemcard;
