import React, { useEffect, useState } from "react";
import Container from "../ReUseableComponents/Container";
import AxiosFetch from "../CustomHook/AxiosFetch";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const HouseUpdate = () => {
    const [house, setHouse] = useState(null);
    const houseID = useParams();
    const axiosSecure = AxiosFetch();
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    useEffect(()=>{
        handleLoadHouse(houseID.id)
    },[])

    const handleLoadHouse = async(id) =>{
        const result = await axiosSecure(`https://househunter-lake.vercel.app/gethouse?id=${id}`);
        setHouse(result.data);
    };


    const handleUpdateHouse = async (data) => {
      const result = await axiosSecure.patch(`https://househunter-lake.vercel.app/updatehouse?id=${house._id}`,data);
      if(result.data.modifiedCount){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Data Update successfully!',
          showConfirmButton: false,
          timer: 1500
        })
        reset();
        navigate("/houseowner");
      }else{
        Swal.fire({
          position: 'error',
          icon: 'error',
          title: 'Something went wrong!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    };

  return (
    <Container>
      <h1 className="mb-5 font-Inter text-lg font-bold">Update House</h1>
      <form
        onSubmit={handleSubmit(handleUpdateHouse)}
        className="space-y-2 font-Inter text-sm"
      >
        <div className="grid grid-cols-2 gap-3">
          <input
            {...register("name", { required: true })}
            className="border w-full outline-none px-3 py-1 rounded-sm"
            type="text"
            name="name"
            id="name"
            defaultValue={house?.name}
          />
          <input
            {...register("address", { required: true })}
            className="border w-full outline-none px-3 py-1 rounded-sm"
            type="text"
            name="address"
            id="address"
            defaultValue={house?.address}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input
            {...register("city", { required: true })}
            className="border w-full outline-none px-3 py-1 rounded-sm"
            type="text"
            name="city"
            id="city"
            defaultValue={house?.city}
          />
          <input
            {...register("bedroom", { required: true })}
            className="border w-full outline-none px-3 py-1 rounded-sm"
            type="number"
            name="bedroom"
            id="bedroom"
            defaultValue={house?.bedroom}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input
            {...register("bathroom", { required: true })}
            className="border w-full outline-none px-3 py-1 rounded-sm"
            type="number"
            name="bathroom"
            id="bathroom"
            defaultValue={house?.bathroom}
          />
          <input
            {...register("roomsize", { required: true })}
            className="border w-full outline-none px-3 py-1 rounded-sm"
            type="number"
            name="roomsize"
            id="roomsize"
            defaultValue={house?.roomsize}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input
            {...register("abilitydate", { required: true })}
            className="border w-full outline-none px-3 py-1 rounded-sm"
            type="date"
            name="abilitydate"
            id="abilitydate"
            defaultValue={house?.abilitydate}
          />
          <input
            {...register("rentpermonth", { required: true })}
            className="border w-full outline-none px-3 py-1 rounded-sm"
            type="number"
            name="rentpermonth"
            id="rentpermonth"
            defaultValue={house?.rentpermonth}
          />
        </div>
        <input
          {...register("picture", { required: true })}
          className="border w-full outline-none px-3 py-1 rounded-sm"
          type="text"
          name="picture"
          id="picture"
          defaultValue={house?.picture}
        />
        <input
          {...register("Phone", { required: true })}
          className="border w-full outline-none px-3 py-1 rounded-sm"
          type="tel"
          name="Phone"
          id="Phone"
          defaultValue={house?.Phone}
        />
        <textarea
          {...register("description", { required: true })}
          className="border w-full outline-none px-3 py-1 rounded-sm"
          type="text"
          rows={5}
          name="description"
          id="description"
          defaultValue={house?.description}
        />
        <input
          className="outline-none px-3 py-2 bg-yellow-500 rounded-sm shadow-md w-full"
          type="submit"
          value="Update House"
        />
      </form>
    </Container>
  );
};

export default HouseUpdate;
