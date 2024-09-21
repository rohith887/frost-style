import React, { useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const Orderpage = () => {
  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const cartItems=useSelector((state)=>state.cart.cart);
  const checkPayment=async()=>{
    const stripe = await loadStripe("pk_test_51Oej5MSCLWGe4NcCzy54W3doCvNYKfS0A9Mrlqkg0AvhwNCjjKZ0phSIN35fgwQziJQE19c5aP0WNPRRz2niotqx00ZwlFfUNn");
    const body={
      products:cartItems,
      username:firstName,
      address:address,
    }
    const headers={
       "Content-Type":"application/json"
    }
    console.log(cartItems);
    const response=await fetch("https://frost-style-backend.onrender.com/api/checkout",{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    });
    const session=await response.json();
    const result=stripe.redirectToCheckout({
      sessionId:session.id
    })
    if(result.error){
      toast.error("An unexpected error occurred");
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Access the form data
    // const formData = {
    //   firstName,
    //   contact,
    //   email,
    //   address,
    // };

    // You can do something with the formData, e.g., store it, send it to a server, etc.
    //console.log(formData);

    // Clear the form fields
    // setFirstName('');
    // setContact('');
    // setEmail('');
    // setAddress('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-5">
      <div className="md:p-8 p-4 w-full  md:w-[60%] mx-auto bg-white rounded shadow-md border-2 border-gray-200">
        <div className='flex items-center justify-center'>
        <h1 className='text-red-500 '>*Use this account number:4000 0035 6000 0008</h1>
        </div>
        
        <h1 className="mb-4 text-2xl font-bold text-black md:text-3xl">User Information Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2 text-sm font-semibold text-gray-600">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block mb-2 text-sm font-semibold text-gray-600">Contact Number:</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-600">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block mb-2 text-sm font-semibold text-gray-600">Address:</label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows="3"
              className="w-full p-2 border rounded"
              required
            />
          </div>
<div className='flex justify-end'>


          <button
            type="submit" onClick={checkPayment}
            className="px-4 py-2 text-white bg-black rounded hover:bg-black focus:outline-none focus:shadow-outline-indigo active:bg-black"
          >
            Place Order
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Orderpage;
