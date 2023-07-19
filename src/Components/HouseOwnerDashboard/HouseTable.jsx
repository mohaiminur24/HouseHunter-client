import React from "react";
import AxiosFetch from "../CustomHook/AxiosFetch";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const HouseTable = ({ house, index, setRefetch, refetch }) => {
  const axiosSecure = AxiosFetch();
  const {
    HouseEmail,
    HouseOwner,
    Phone,
    abilitydate,
    address,
    bedroom,
    name,
    picture,
    _id,
  } = house;
  const handleDelete = async (id) => {
    const result = await axiosSecure.delete(
      `https://househunter-lake.vercel.app/deleteuserroute?id=${id}`
    );
    if (result.data.deletedCount) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Delete House Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    setRefetch(!refetch);
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask rounded-md w-16 h-16">
                <img src={picture} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{HouseEmail}</div>
            </div>
          </div>
        </td>
        <td>
          {HouseOwner}
          <br />
          <span className="badge badge-ghost badge-sm">{address}</span>
        </td>
        <td>
          <h1>{abilitydate}</h1>
          <h1>BedRoom:{bedroom}</h1>
          <h1>Phone: {Phone}</h1>
        </td>
        <th>
          <NavLink to={`/houseupdate/${_id}`} className="mr-4">Update</NavLink>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-warning btn-sm"
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default HouseTable;
