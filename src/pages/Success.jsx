import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
axios.defaults.withCredentials = true;

const Success = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
      toast.success("Order placed successfully");
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="mb-4 text-3xl font-semibold text-center">
            Order Successful!
          </h2>
          <p>Your order has been successfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
