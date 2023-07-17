import React from "react";
import Container from "../ReUseableComponents/Container";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center min-h-screen">
        <img
          className="w-4/5 mx-auto"
          src="https://bizgurukul.com/Biz/img/login_side2.png"
          alt=""
        />
        <div className="p-10 border rounded-md shadow-sm font-Inter">
          <h1 className="text-2xl font-bold mb-5">Login User</h1>
          <form>
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
            <div className="mb-5">
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
            <input
              className="w-full py-2 bg-yellow-500 rounded-sm font-semibold text-white tracking-wider cursor-pointer"
              type="submit"
              value="Login"
            />
            <div className="mt-5 text-sm">
              <span>I don't have an Account</span>{" "}
              <NavLink to="/registration" className="text-yellow-500 font-bold">
                Create Account
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
