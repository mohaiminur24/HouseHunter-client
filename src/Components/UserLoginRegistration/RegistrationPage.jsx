import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../ReUseableComponents/Container";

const RegistrationPage = () => {
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
          <form>
            <div className="mb-2">
              <label className="text-sm" htmlFor="email">
                Name
              </label>
              <input
                className="w-full border mt-1 text-gray-400 outline-none px-5 py-2 text-xs rounded-sm shadow-sm"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mb-2">
              <label className="text-sm" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full border mt-1 text-gray-400 outline-none px-5 py-2 text-xs rounded-sm shadow-sm"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="mb-2">
              <label className="text-sm" htmlFor="email">
                Password
              </label>
              <input
                className="w-full border mt-1 text-gray-400 outline-none px-5 py-2 text-xs rounded-sm shadow-sm"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="mb-5">
              <label className="text-sm" htmlFor="email">
                Phone
              </label>
              <input
                className="w-full border mt-1 text-gray-400 outline-none px-5 py-2 text-xs rounded-sm shadow-sm"
                type="tel"
                name="phone"
                id="phone"
              />
            </div>
            <div className="mb-5">
              <label className="text-sm mr-5" htmlFor="email">
                User Role:
              </label>
              <select name="role" className="text-sm border outline-none px-3 py-1 rounded-sm" id="role">
                <option value="HouseRenter">House Renter</option>
                <option value="HouseOwner">House Owner</option>
              </select>
            </div>
            <input
              className="w-full py-2 bg-yellow-500 rounded-sm font-semibold text-white tracking-wider cursor-pointer"
              type="submit"
              value="Registration"
            />
            <div className="mt-5 text-sm">
              <span>I  have an Account</span>{" "}
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
