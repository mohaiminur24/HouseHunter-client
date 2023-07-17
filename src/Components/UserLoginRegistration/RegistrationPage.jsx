import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../ReUseableComponents/Container";
import { useForm } from "react-hook-form";

const RegistrationPage = () => {
  const [passError, setErrorMessage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleRegistration = (data) => {
    // password validation is here
    setErrorMessage(null);
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsSymbol =
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (data.password.length < 6) {
      setErrorMessage("Password must have more then 6 letter");
      return;
    } else if (!isContainsUppercase.test(data.password)) {
      setErrorMessage("Password must have a Capital letter");
      return;
    } else if (!isContainsSymbol.test(data.password)) {
      setErrorMessage("Password must have a special caracter");
      return;
    }
    // Password validation end from here

    reset();
  };

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center min-h-screen">
        <img
          className="w-4/5 mx-auto"
          src="https://www.allen.ac.in/ace2324/assets/images/register.png"
          alt=""
        />
        <div className="p-10 border rounded-md shadow-sm font-Inter">
          <h1 className="text-2xl font-bold mb-5">User Registration</h1>
          <form onSubmit={handleSubmit(handleRegistration)}>
            <div className="mb-2">
              <label className="text-sm" htmlFor="email">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className="w-full border mt-1 text-gray-400 outline-none px-5 py-2 text-xs rounded-sm shadow-sm"
                type="text"
                name="name"
                id="name"
              />
              {errors.name?.type === "required" && (
                <p
                  className="text-xs mt-1 text-red-500 font-Raleway"
                  role="alert"
                >
                  Name is required
                </p>
              )}
            </div>
            <div className="mb-2">
              <label className="text-sm" htmlFor="email">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                className="w-full border mt-1 text-gray-400 outline-none px-5 py-2 text-xs rounded-sm shadow-sm"
                type="email"
                name="email"
                id="email"
              />
              {errors.email?.type === "required" && (
                <p
                  className="text-xs mt-1 text-red-500 font-Raleway"
                  role="alert"
                >
                  Email is required
                </p>
              )}
            </div>
            <div className="mb-2">
              <label className="text-sm" htmlFor="email">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                className="w-full border mt-1 text-gray-400 outline-none px-5 py-2 text-xs rounded-sm shadow-sm"
                type="password"
                name="password"
                id="password"
              />
              {errors.password?.type === "required" && (
                <p
                  className="text-xs mt-1 text-red-500 font-Raleway"
                  role="alert"
                >
                  Password is required
                </p>
              )}
              {passError && (
                <p
                  className="text-xs mt-1 text-red-500 font-Raleway"
                  role="alert"
                >
                  {passError}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label className="text-sm" htmlFor="email">
                Phone
              </label>
              <input
                {...register("phone", { required: true })}
                className="w-full border mt-1 text-gray-400 outline-none px-5 py-2 text-xs rounded-sm shadow-sm"
                type="tel"
                name="phone"
                id="phone"
              />
              {errors.phone?.type === "required" && (
                <p
                  className="text-xs mt-1 text-red-500 font-Raleway"
                  role="alert"
                >
                  Phone is required
                </p>
              )}
            </div>
            <div className="mb-5">
              <label className="text-sm mr-5" htmlFor="email">
                User Role:
              </label>
              <select
                {...register("role", { required: true })}
                name="role"
                className="text-sm border outline-none px-3 py-1 rounded-sm"
                id="role"
              >
                <option value="HouseRenter">House Renter</option>
                <option value="HouseOwner">House Owner</option>
              </select>
              {errors.role?.type === "required" && (
                <p
                  className="text-xs mt-1 text-red-500 font-Raleway"
                  role="alert"
                >
                  Role is required
                </p>
              )}
            </div>
            <input
              className="w-full py-2 bg-yellow-500 rounded-sm font-semibold text-white tracking-wider cursor-pointer"
              type="submit"
              value="Registration"
            />
            <div className="mt-5 text-sm">
              <span>I have an Account</span>{" "}
              <NavLink to="/login" className="text-yellow-500 font-bold">
                Login Account
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default RegistrationPage;
