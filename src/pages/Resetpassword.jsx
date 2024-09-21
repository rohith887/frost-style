import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put("https://frost-style-backend.onrender.com/api/reset-password", {
        email,
      });
      const data = await res.data;
      if (data.success) {
        toast.success(data.message);
        navigate("/verify-otp");
      }
    } catch (error) {
      toast.error("Error in Resetting the password try again");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleResetPassword}
        className="bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] lg:w-[23vw] text-sm"
      >
        <span className="-mb-1 text-lg text-center text-gray-600 cursor-pointer">
          Enter Your Email For Verification
        </span>
        <input
          type="email"
          name="email"
          id="email"
          className="px-3 py-2 text-gray-600 border rounded-md outline-none focus:border-black"
          autoComplete="off"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="px-3 py-2 text-white bg-black border rounded-md outline-none hover:bg-black"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
