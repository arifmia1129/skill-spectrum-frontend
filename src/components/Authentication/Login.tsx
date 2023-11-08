/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

import Loading from "../Shared/Loading";

const Login = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //   const [user, isLoading] = useUser();

  //   useEffect(() => {
  //     if (user?.success) {
  //       navigate(from, { replace: true });
  //     }
  //   }, [from, user, navigate, isLoading]);

  const onSubmit = async (userData: any) => {
    setIsProcessing(true);
    // try {
    //   const { data } = await api.post("user/login", userData);

    //   if (data.success) {
    //     localStorage.removeItem("user");
    //     localStorage.setItem("user", JSON.stringify(data.data));
    //     toast.success(data.message);
    //     reset();
    //     navigate(from, { replace: true });
    //   } else {
    //     toast.error(data.message);
    //   }
    // } catch (error) {
    //   toast.error(error.response.data.error);
    // } finally {
    //   setIsProcessing(false);
    // }
  };

  if (isProcessing || isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center h-[60vh] mb-10">
      <div className="md:w-1/2 mx-2 w-full">
        <div className="bg-primary rounded-lg p-5 md:p-10">
          <h1 className="mb-6 text-3xl font-semibold text-center text-white">
            Login
          </h1>
          <div className="flex justify-center items-center w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <div className="w-full max-w-md">
                  <label htmlFor="mobile" className="block text-white">
                    Mobile
                  </label>
                  <input
                    {...register("mobile", {
                      required: "Mobile number is required",
                    })}
                    type="text"
                    id="mobile"
                    placeholder="Enter a valid mobile number"
                    className="input w-full md:w-96"
                  />
                  {errors.mobile && (
                    <span className="text-red-500 text-sm">
                      {errors.mobile.message}
                    </span>
                  )}
                </div>
                <div className="w-full max-w-md">
                  <label htmlFor="password" className="block text-white">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type="password"
                    id="password"
                    placeholder="Enter a valid password"
                    className="input w-full md:w-96"
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="relative mt-6">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-white text-primary font-semibold"
                  >
                    Login
                  </button>
                </div>
                <p className="text-white">
                  Don't have an account?{" "}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
