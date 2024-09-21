import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("https://frost-style-backend.onrender.com/api/verify-otp", {
        otp,
        newPassword: password,
      });
      const data = await res.data;
      if (data.success) {
        toast.success(res.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-screen px-5">
      <form
        onSubmit={handleVerifyOtp}
        className="bg-white rounded-lg p-5 border-2 border-gray-200 shadow-lg flex flex-col gap-3 w-full md:w-[30%]  text-sm"
      >
        <label>Enter OTP</label>
        <input
          type="tel"
          name="otp"
          id="otp"
          className="px-3 py-2 text-gray-600 border rounded-md outline-none focus:border-black"
          autoComplete="off"
          placeholder="4 digit otp"
          required
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
       <label>Enter New Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="px-3 py-2 text-gray-600 border rounded-md outline-none focus:border-black"
          autoComplete="off"
          placeholder="********"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="px-3 py-2 text-white bg-black border rounded-md outline-none hover:bg-black"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
