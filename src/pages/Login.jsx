import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/Slices/AuthSlice";
import toast from "react-hot-toast";
// import pic6 from '../assets/pic6.jpg'
const Login = () => {
  const [email, setEmail] = useState("admin1@gmail.com");
  const [password, setPassword] = useState("admin");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://frost-style-backend.onrender.com/api/login", {
        email,
        password,
      });
      const data = await res.data;

      if (res.status === 200) {
        dispatch(loginUser());
        toast.success(data.message);
        navigate("/home");
      } else {
        toast.error(data.message);
        navigate("/signup");
      }
    } catch (error) {
      // Handle axios error and display a toast message
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const errorMessage = error.response.data.message || "Server error";
        toast.error(errorMessage);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex w-auto px-5 ">
      <div className="flex w-full md:w-[60%] mx-auto mt-10 border rounded-lg shadow-lg">
      <div className="hidden md:block" >
        <img src='https://images.pexels.com/photos/3584758/pexels-photo-3584758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className=" w-[500px] h-[600px] rounded-l-lg " alt="login pic"/>
      </div>
      <div className="flex flex-col w-[400px] md:w-[600px] px-5 gap-20  ">
        <div className="text-center">
        <h1 className="mt-10 text-5xl font-bold tracking-tighter text-black">Welcome back !</h1>
        </div>
        
      <form
        onSubmit={handleLogin}
        className="flex flex-col px-5 py-5 mt-2 bg-white md:mt-10 "
      >
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className=" mt-[-5px]  border-gray-500 outline-none border-b-[1px]"
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
          className="mt-[-5px] border-gray-500 outline-none border-b-[1px]"
          autoComplete="off"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          to="/forgot-password"
          className="pt-2 -mb-1 text-xs text-gray-600 cursor-pointer hover:underline"
        >
          Forgot Password
        </Link>
        <button
          type="submit"
          className="px-3 py-2 my-4 mx-auto w-[60%] text-white bg-black rounded-md outline-none "
        >
          Login{" "}
        </button>
        <p className="flex gap-2 -mt-1 text-xs text-gray-600">
          <span>Or</span>
          <Link to="/signup" className="hover:text-black">
            Create your account
          </Link>
        </p>
      </form>

      </div>
      </div>
        
    </div>
  );
};

export default Login;


