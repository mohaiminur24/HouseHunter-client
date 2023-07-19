import React from 'react';
import GetUser from '../CustomHook/GetUser';

const SingleHouse = ({house}) => {
    const user = GetUser();
    const {HouseEmail,HouseOwner,HousePhone,Phone,abilitydate,address,bathroom,bedroom,city,description,name,picture,rentpermonth,roomsize,_id} = house;
    return (
        <div className='border shadow-md p-3'>
            <img className='w-full h-52 rounded-sm' src={picture} alt="" />
            <div className='my-3 font-Inter text-sm font-bold'>
                <h1 className='text-lg text-yellow-500'>{name}</h1>
                <h1>House owner: <span className='font-normal'>{HouseOwner}</span></h1>
                <h1>Owner Email: <span className='font-normal'>{HouseEmail}</span></h1>
                <h1>Owner Phone: <span className='font-normal'>{HousePhone}</span></h1>
                <h2>Rent Per Month: <span className='font-normal'>{rentpermonth} Taka</span></h2>
                <h2>Address: <span className='font-normal'>{address}</span></h2>
                <h2>Ability: <span className='font-normal'>{abilitydate}</span></h2>
                <h2>Phone: <span className='font-normal'>{Phone}</span></h2>
                <h2>Bath Room: <span className='font-normal'>{bathroom}</span></h2>
                <h2>Bed Room: <span className='font-normal'>{bedroom}</span></h2>
                <h2>City: <span className='font-normal'>{city}</span></h2>
                <h2>Room Size: <span className='font-normal'>{roomsize} Meter</span></h2>
                <p className='my-1 text-xs font-Raleway font-normal text-gray-500'>{description}</p>
                <button disabled={user.role !== "HouseRenter"} className='w-full bg-yellow-500 py-2 rounded-md mt-auto disabled:opacity-30'>Add Booking</button>
            </div>
        </div>
    );
};

export default SingleHouse;