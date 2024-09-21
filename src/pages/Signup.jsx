import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import pic6 from '../assets/pic6.jpg'

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await axios.post(`https://frost-style-backend.onrender.com/api/signup`, {
      name,
      email,
      password,
    });
    const data = await res.data;
    if (res.status === 200) {
      toast.success(data.message);
      navigate("/");
    } else if (res.status === 400 || res.status === 500) {
      toast.error(data.message);
    }
    
  };

  return (
    <div className="flex w-auto px-5 ">
      <div className="flex w-full md:w-[60%]  mx-auto mt-10 border rounded-lg shadow-lg">
      <div className="hidden md:block"  >
        <img src='https://images.pexels.com/photos/3584758/pexels-photo-3584758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="w-[500px] h-[600px] rounded-l-lg " alt="login pic"/>
      </div>
      <div className="flex flex-col w-[400px] h-full md:w-[600px] px-5 gap-20  ">
        <div className="text-center">
        <h1 className="mt-10 text-5xl font-bold tracking-tighter text-black">Sign Up</h1>
        <h1 className="mt-5 ">Create your Account</h1>
        </div>
        
      <form
        onSubmit={handleSignup}
        className="flex flex-col px-5 bg-white "
      >
        <label>Username</label>
        <input
          type="name"
          name="username"
          id="username"
          className="px-1 border-gray-500 outline-none border-b-[1px]"
          autoComplete="off"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="pt-2">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="px-1 mt-[-6px] border-gray-500 outline-none border-b-[1px]"
          autoComplete="off"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="pt-2">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="px-1 mt-[-5px] border-gray-500 outline-none border-b-[1px]"
          autoComplete="off"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       
      

      
        <button
          type="submit"
          className="px-3 py-2 my-4 mx-auto  w-[60%] text-white bg-black rounded-md outline-none "
        >
          SignUp{" "}
        </button>
        <p className="flex gap-2 -mt-1 text-xs text-gray-600">
          <span>Or</span>
          <Link to="/" className="hover:text-black">
            Login to your account
          </Link>
        </p>
        
      </form>

      </div>
      </div>
        
    </div>
  );
};

export default Signup;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { NavLink, useNavigate } from 'react-router-dom';


// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     try {
//       const response = await axios.post('https://frost-style-backend.onrender.com/', { name, email, password });
//       console.log(response.data); // Assuming the server sends back data
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration failed:', error);
//       // Handle registration failure, display an error message, etc.
//       setError('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-yellow-300">
//       <div className="w-full max-w-md p-8 space-y-8 rounded shadow-lg bg-yellow-50">
//         <h2 className="text-3xl font-extrabold text-center text-yellow-900">Register</h2>
//         {error && <p className="text-sm text-center text-red-500">{error}</p>}
//         <form className="mt-8 space-y-6" onSubmit={handleRegister}>
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-yellow-900">
//               Username
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               autoComplete="name"
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="block w-full mt-1 border-2 border-gray-500 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-yellow-400 f"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-yellow-900">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="block w-full mt-1 border-2 border-gray-500 rounded-md shadow-sm outline-non focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-yellow-900">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="new-password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="block w-full mt-1 border-2 border-gray-500 rounded-md shadow-sm outline-non focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-200"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//         <NavLink to="/login" className="flex justify-center text-center text-yellow-900">
//           Already a user? Login
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Register;
