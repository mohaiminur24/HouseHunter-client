import React, { useEffect, useState } from "react";
import GetUser from "../CustomHook/GetUser";
import AxiosFetch from "../CustomHook/AxiosFetch";
import Container from "../ReUseableComponents/Container";
import Header from "../ReUseableComponents/Header";
import Footer from "../ReUseableComponents/Footer";

const HouseRent = () => {
  const user = GetUser();
  const axiosSecure = AxiosFetch();
  const [houses, setHouses] = useState(null);

  const hanleloadhouses = async () => {
    const result = await axiosSecure(
      `http://localhost:3000/houserenterhouse?email=${user.email}`
    );
    setHouses(result.data);
  };

  useEffect(() => {
    hanleloadhouses();
  }, []);
  console.log(houses);
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-160px)]">
        <Container>
          <div className="overflow-x-auto ">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    index
                  </th>
                  <th>Name</th>
                  <th>Room Info</th>
                  <th>Owner</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {houses &&
                  houses.map((house, index) => {
                    return (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask w-28 h-16">
                                  <img
                                    src={house?.picture}
                                    
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{house?.name}</div>
                                <div className="text-sm opacity-50">
                                  {house?.city}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-xs">
                            {house?.description}
                            <br />
                            <h1>{house?.address}</h1>
                            <h1>Bed Room: {house?.bedroom}</h1>
                            <h1>Bath Room: {house?.bathroom}</h1>
                            <h1>Booking Date: {house?.abilitydate}</h1>
                            <h1>Cost: {house?.rentpermonth} Taka</h1>
                          </td>
                          <td>
                          <h1 className="font-bold">Name: {house?.HouseOwner}</h1>
                          <h1>Email: {house?.HouseEmail}</h1>
                          <h1>Phone: {house?.HousePhone}</h1>
                          </td>
                          <th>
                            Confrim
                          </th>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default HouseRent;
