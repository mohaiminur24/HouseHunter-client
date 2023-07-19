import React from "react";
import Header from "../ReUseableComponents/Header";
import Footer from "../ReUseableComponents/Footer";
import Container from "../ReUseableComponents/Container";
import GetUser from "../CustomHook/GetUser";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import AxiosFetch from "../CustomHook/AxiosFetch";

const HouseOwner = () => {
  const user = GetUser();
  const axiosSecure = AxiosFetch();
  const { register, handleSubmit, reset } = useForm();

  const handleAddNewHouse = async (data) => {
    const newHouse = {
      ...data,
      HouseOwner: user.name,
      HouseEmail: user.email,
      HousePhone: user.phone,
    };

   const result =await axiosSecure.post("http://localhost:3000/createnewhouse", newHouse);
   console.log(result);
   if (result.data.insertedId) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "New House Add Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
   }else(
    console.log("Somethins went wrong!")
   )

    // fetch("http://localhost:3000/createnewhouse", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newHouse),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "New House Add Successfully!",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     }
    //   });

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
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
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
