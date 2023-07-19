import React, { useEffect, useState } from "react";
import Header from "../ReUseableComponents/Header";
import Footer from "../ReUseableComponents/Footer";
import Container from "../ReUseableComponents/Container";
import SingleHouse from "./SingleHouse";

const HomePage = () => {
    const [houses, setHouses] = useState(null);

    useEffect(()=>{
        fetch("https://househunter-lake.vercel.app/allhouses").then(res=>res.json()).then(data=>setHouses(data));
    },[]);

    const handlefilter = (event)=>{
        event.preventDefault();
        let filterData;
        const from = event.target;
        const city = from.city.value;
        const bedroom = from.bedroom.value;
        const roomsize = from.roomsize.value;
        const abilitydate = from.ability.value;
        const rentpermonth = from.Rentpermonth.value;
        if(city && bedroom && roomsize && abilitydate){
          filterData = {city,bedroom,abilitydate,roomsize};
        }else if(city && bedroom && roomsize){
          filterData = {city,bedroom,roomsize};
        }else if(city && bedroom){
          filterData = {city,bedroom};
        }else if(city){
          filterData = {city};
        };
        fetch(`https://househunter-lake.vercel.app/filterdata?rent=${rentpermonth}`,{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify(filterData)
        }).then(res=>res.json())
        .then(data=> setHouses(data));
    };
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-160px)]">
        <Container>
            {/* filter start from here */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-y py-3">
                <h1 className="mb-2 font-Inter opacity-60 font-bold">Filter House</h1>
                <form onSubmit={handlefilter} className="text-xs rounded-md text-gray-500 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-5 font-Cinzel col-span-2">
                    <input className="border w-full outline-none px-2 py-1" type="text" name="city" id="city" placeholder="City" />
                    <input className="border w-full outline-none px-2 py-1" type="number" name="bedroom" id="bedroom" placeholder="Bed Room" />
                    <input className="border w-full outline-none px-2 py-1" type="number" name="roomsize" id="roomsize" placeholder="Room Size meter"/>
                    <input className="border w-full outline-none px-2 py-1" type="date" name="ability" id="ability" />
                    <select className="border w-full outline-none px-2 py-1" name="Rentpermonth" id="rentpermonth">
                        <option value="less5000">Less then 5000</option>
                        <option value="More5000">More then 5000</option>
                    </select>
                    <input className="border w-full outline-none px-2 py-1 bg-yellow-500 font-semibold" type="submit" value="Search" />
                </form>
            </div>
            {/* filter end from here */}

            {/* House list container is here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
                {houses && houses.map((house,index)=> <SingleHouse house={house} key={index} />)}
            </div>

        </Container>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
