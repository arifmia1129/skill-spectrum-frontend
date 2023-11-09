/* eslint-disable @typescript-eslint/no-explicit-any */
// ... other imports
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useStudentRegisterMutation } from "../../redux/features/user/userApiSlice";
import toast from "react-hot-toast";
import { useState } from "react";
import Loading from "../Shared/Loading";
import { useAppDispatch } from "../../redux/hook";
import { addStudentId } from "../../redux/features/student/studentSlice";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useAppDispatch();

  const [isProcessing, setIsProcessing] = useState(false);

  const [studentRegister] = useStudentRegisterMutation();

  const onSubmit = async (info: any) => {
    try {
      setIsProcessing(true);

      const { password, ...other } = info;

      const { data, error } = (await studentRegister({
        password,
        student: other,
      })) as any;
      if (data) {
        dispatch(addStudentId(data.data.id));
        (document as any)?.getElementById("student_id_modal").showModal();
        setIsProcessing(false);
        toast.success(data.message);
        reset();
      } else if (error) {
        setIsProcessing(false);
        toast.error(error.data.message);
      }
    } catch (error) {
      // console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (isProcessing) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto">
      <div className="mx-2 w-full">
        <div className="bg-primary rounded-lg p-5 md:p-10">
          <h1 className="mb-6 text-3xl font-semibold text-center text-white">
            Register
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="firstName" className="block text-white">
                  First Name
                </label>
                <input
                  {...register("name.firstName", {
                    required: "First name is required",
                  })}
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="input w-full md:w-96 m-2"
                />
                {(errors?.name as any)?.firstName && (
                  <span className="text-white text-sm">
                    {(errors.name as any).firstName.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="middleName" className="block text-white">
                  Middle Name
                </label>
                <input
                  {...register("name.middleName")}
                  type="text"
                  id="middleName"
                  placeholder="Enter your middle name"
                  className="input w-full md:w-96 m-2"
                />
                {(errors?.name as any)?.middleName && (
                  <span className="text-white text-sm">
                    {(errors.name as any).middleName.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-white">
                  Last Name
                </label>
                <input
                  {...register("name.lastName")}
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="input w-full md:w-96 m-2"
                />
                {(errors?.name as any)?.lastName && (
                  <span className="text-white text-sm">
                    {(errors.name as any).lastName.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="lastName" className="block text-white">
                  Gender
                </label>
                <select
                  {...register("gender", {
                    required: "Gender is required",
                  })}
                  className="select select-bordered w-full md:w-96 m-2"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {(errors as any)?.gender && (
                  <span className="text-white text-sm">
                    {(errors as any).gender.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="lastName" className="block text-white">
                  Blood Group
                </label>
                <select
                  {...register("bloodGroup", {
                    required: "Blood Group is required",
                  })}
                  className="select select-bordered w-full md:w-96 m-2"
                >
                  <option value="a+">A+</option>
                  <option value="a-">A-</option>
                  <option value="b+">B+</option>
                  <option value="b-">b-</option>
                  <option value="ab+">AB+</option>
                  <option value="ab-">AB-</option>
                  <option value="o+">O+</option>
                  <option value="o-">O-</option>
                </select>
                {(errors as any)?.bloodGroup && (
                  <span className="text-white text-sm">
                    {(errors as any).bloodGroup.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="dateOfBirth" className="block text-white">
                  Date of Birth
                </label>
                <input
                  {...register("dateOfBirth", {
                    required: "Date of Birth is required",
                  })}
                  type="text"
                  id="dateOfBirth"
                  placeholder="Write your birth date"
                  className="input w-full md:w-96 m-2"
                />
                {(errors as any)?.dateOfBirth && (
                  <span className="text-white text-sm">
                    {(errors as any).dateOfBirth.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-white">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="text"
                  id="email"
                  placeholder="Enter your first name"
                  className="input w-full md:w-96 m-2"
                />
                {(errors as any)?.email && (
                  <span className="text-white text-sm">
                    {(errors as any).email.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="contactNo" className="block text-white">
                  Contact No
                </label>
                <input
                  {...register("contactNo", {
                    required: "Contact no is required",
                  })}
                  type="text"
                  id="contactNo"
                  placeholder="Enter your first name"
                  className="input w-full md:w-96 m-2"
                />
                {(errors as any)?.contactNo && (
                  <span className="text-white text-sm">
                    {(errors as any).contactNo.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="emergencyContactNo"
                  className="block text-white"
                >
                  Emergency Contact No
                </label>
                <input
                  {...register("emergencyContactNo", {
                    required: "Emergency Contact No is required",
                  })}
                  type="text"
                  id="emergencyContactNo"
                  placeholder="Enter your first name"
                  className="input w-full md:w-96 m-2"
                />
                {(errors as any)?.emergencyContactNo && (
                  <span className="text-white text-sm">
                    {(errors as any).emergencyContactNo.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="address" className="block text-white">
                  Address
                </label>
                <input
                  {...register("address", {
                    required: "Address is required",
                  })}
                  type="text"
                  id="address"
                  placeholder="Enter your first name"
                  className="input w-full md:w-96 m-2"
                />
                {(errors as any)?.address && (
                  <span className="text-white text-sm">
                    {(errors as any).address.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="password" className="block text-white">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  id="password"
                  placeholder="Enter your first name"
                  className="input w-full md:w-96 m-2"
                />
                {(errors as any)?.password && (
                  <span className="text-white text-sm">
                    {(errors as any).password.message}
                  </span>
                )}
              </div>
            </div>
            {/* Profile Image - Optional */}
            {/* ... other fields */}
            <div className="relative mt-6 flex justify-center">
              <button
                type="submit"
                className=" py-3 rounded-full bg-white text-primary font-semibold w-44"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-white mt-4 text-center">
            Already have an account?{" "}
            <span className="text-white hover:underline cursor-pointer">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
