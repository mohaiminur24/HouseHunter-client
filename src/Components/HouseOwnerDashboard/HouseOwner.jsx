import React, { useContext, useEffect, useState } from "react";
import Header from "../ReUseableComponents/Header";
import Footer from "../ReUseableComponents/Footer";
import Container from "../ReUseableComponents/Container";
import GetUser from "../CustomHook/GetUser";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import AxiosFetch from "../CustomHook/AxiosFetch";
import HouseTable from "./HouseTable";
import { AuthContext } from "../AuthContextAPI/ContextAPI";

const HouseOwner = () => {
  const {isLoading} = useContext(AuthContext);
  const user = GetUser();
  const axiosSecure = AxiosFetch();
  const { register, handleSubmit, reset } = useForm();
  const [houses, setHouses] = useState(null);
  const [refetch, setRefetch] = useState(false);

  if(isLoading){
    return;
  }

  useEffect(() => {
    loadhouses();
  }, [refetch]);

  const loadhouses = async () => {
    const result = await axiosSecure(
      `https://househunter-lake.vercel.app/getsingleuserhouses?email=${user.email}`
    );
    setHouses(result.data);
  };

  const handleAddNewHouse = async (data) => {
    const newHouse = {
      ...data,
      HouseOwner: user.name,
      HouseEmail: user.email,
      HousePhone: user.phone,
    };

    const result = await axiosSecure.post(
      "https://househunter-lake.vercel.app/createnewhouse",
      newHouse
    );
    console.log(result);
    if (result.data.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New House Add Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      setRefetch(!refetch);
    } else
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500,
      });
    reset();
  };

  return (
    <>
      <Header />
      <Container>
        <div className="min-h-[calc(100vh-160px)]">
          <div className="text-end">
            <label
              htmlFor="my_modal_6"
              className="px-3 py-1 bg-yellow-400 text-white font-bold font-Inter rounded-md text-sm"
            >
              Add new House
            </label>
          </div>
          {/* House Owner all data table is here */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Details</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {houses && houses.map((houses,index)=> <HouseTable key={index} index={index} house={houses} setRefetch={setRefetch} refetch={refetch}/>)}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
      <Footer />

      {/* Add new house modal is here */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h1 className="mb-5 font-Inter text-lg font-bold">Add New House</h1>
          <form
            onClick={handleSubmit(handleAddNewHouse)}
            className="space-y-2 font-Inter text-sm"
          >
            <div className="grid grid-cols-2 gap-3">
              <input
                {...register("name", { required: true })}
                className="border w-full outline-none px-3 py-1 rounded-sm"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
              <input
                {...register("address", { required: true })}
                className="border w-full outline-none px-3 py-1 rounded-sm"
                type="text"
                name="address"
                id="address"
                placeholder="Address"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                {...register("city", { required: true })}
                className="border w-full outline-none px-3 py-1 rounded-sm"
                type="text"
                name="city"
                id="city"
                placeholder="City"
              />
              <input
                {...register("bedroom", { required: true })}
                className="border w-full outline-none px-3 py-1 rounded-sm"
                type="number"
                name="bedroom"
                id="bedroom"
                placeholder="BedRoom"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                {...register("bathroom", { required: true })}
                className="border w-full outline-none px-3 py-1 rounded-sm"
                type="number"
                name="bathroom"
                id="bathroom"
                placeholder="BathRoom"
              />
              <input
                {...register("roomsize", { required: true })}
                className="border w-full outline-none px-3 py-1 rounded-sm"
                type="number"
                name="roomsize"
                id="roomsize"
                placeholder="Room Size in meter"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                {...register("abilitydate", { required: true })}
                className="border w-full outline-none px-3 py-1 rounded-sm"
                type="date"
                name="abilitydate"
                id="abilitydate"
                placeholder="Ability Date"
              />
              <input
                {...register("rentpermonth", { required: true })}
                className="border w-full outline-none px-3 py-1 rounded-sm"
                type="number"
                name="rentpermonth"
                id="rentpermonth"
                placeholder="Rent Per Month TK"
              />
            </div>
            <input
              {...register("picture", { required: true })}
              className="border w-full outline-none px-3 py-1 rounded-sm"
              type="text"
              name="picture"
              id="picture"
              placeholder="Thumbanil url"
            />
            <input
              {...register("Phone", { required: true })}
              className="border w-full outline-none px-3 py-1 rounded-sm"
              type="tel"
              name="Phone"
              id="Phone"
              placeholder="Phone"
            />
            <textarea
              {...register("description", { required: true })}
              className="border w-full outline-none px-3 py-1 rounded-sm"
              type="text"
              rows={5}
              name="description"
              id="description"
              placeholder="Description"
            />
            <input
              className="outline-none px-3 py-2 bg-yellow-500 rounded-sm shadow-md w-full"
              type="submit"
              value="Add House"
            />
          </form>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="text-red-500 border px-3 border-red-500 absolute top-2 cursor-pointer right-2 py-1 rounded-full"
            >
              X
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseOwner;
