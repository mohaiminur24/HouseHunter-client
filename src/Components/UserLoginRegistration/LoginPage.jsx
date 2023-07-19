import React, { useContext } from "react";
import Container from "../ReUseableComponents/Container";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SetUser from "../CustomHook/SetUser";
import { AuthContext } from "../AuthContextAPI/ContextAPI";

const LoginPage = () => {
  const {setLoading, isLoading} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const {createtoken} = useContext(AuthContext);

    // Login system function implement is complete
    const handleLogin = data =>{
      setLoading(true);
        fetch(`https://househunter-lake.vercel.app/getnewuser?email=${data.email}`).then(res=> res.json())
        .then(resdata=>{
          if(resdata?.password == data.password){
            SetUser(resdata);
            createtoken(resdata);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'User Login Successfully!',
              showConfirmButton: false,
              timer: 1500
            })
            reset();
            if(resdata.role == "HouseRenter"){
              navigate("/houserent");
              setLoading(false);
            }else{
              navigate("/houseowner");
              setLoading(false);
            };
          }else if(resdata?.error){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Email not match!',
            });
            setLoading(false);
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'password not match!',
            });
            setLoading(false);
          };
        });
    };
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
          <form onSubmit={handleSubmit(handleLogin)}>
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
              {errors.email?.type === 'required' && <p className="text-xs mt-1 text-red-500 font-Raleway" role="alert">Email is required</p>}
            </div>
            <div className="mb-5">
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
              {errors.password?.type === 'required' && <p className="text-xs mt-1 text-red-500 font-Raleway" role="alert">Password is required</p>}
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
