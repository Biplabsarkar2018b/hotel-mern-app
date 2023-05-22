import { Link } from "react-router-dom";

import React, { useState } from "react";
import axios from "axios";

const HotelRegUI = () => {
  const [ownerName, setownerName] = useState("");
  const [ownerEmail, setownerEmail] = useState("");
  const [ownerPhone, setownerPhone] = useState("");
  const [password, setpassword] = useState("");
  const [hotelName, sethotelName] = useState("");
  const [hotelCity, sethotelCity] = useState("");
  const [hotelStreetName, sethotelStreetName] = useState("");
  const [hotelState, sethotelState] = useState("");
  const [hotelPincode, sethotelPincode] = useState("");
  const [hotelWebsiteUrl, sethotelWebsiteUrl] = useState("");
  const [hotelPhoneNumber, sethotelPhoneNumber] = useState("");
  const [hotelEmailAddr, sethotelEmailAddr] = useState("");
  const [roomTypes, setroomTypes] = useState("");

  const onClickHandler = () => {
    const data = {
      ownerName,
      ownerEmail,
      ownerPhone,
      password,
      hotelName,
      hotelCity,
      hotelStreetName,
      hotelState,
      hotelPincode,
      hotelWebsiteUrl,
      hotelPhoneNumber,
      hotelEmailAddr,
      roomTypes,
    };
    const url = "http://localhost:3300/register/hotel";


    axios
      .post(url, data)
      .then((response) => {
        if (response.status == 200){
           alert("Success");
           localStorage.setItem('hotelData',JSON.stringify(response.data));
        }
      })
      .catch((error) => alert("Email or Phone is already a user"));
  };

  return (
    <div className="overflow-scroll pt-[40rem] pb-10 w-full h-full flex flex-col justify-center items-center scrollable">
      <input
        type="text"
        placeholder="Owner Name"
        value={ownerName}
        onChange={(ev) => setownerName(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Owner Email"
        value={ownerEmail}
        onChange={(ev) => setownerEmail(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Owner Phone"
        value={ownerPhone}
        onChange={(ev) => setownerPhone(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Create Password"
        value={password}
        onChange={(ev) => setpassword(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Hotel Name"
        value={hotelName}
        onChange={(ev) => sethotelName(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Hotel City"
        value={hotelCity}
        onChange={(ev) => sethotelCity(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Hotel Street Name"
        value={hotelStreetName}
        onChange={(ev) => sethotelStreetName(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Hotel State"
        value={hotelState}
        onChange={(ev) => sethotelState(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Hotel Pincode"
        value={hotelPincode}
        onChange={(ev) => sethotelPincode(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Hotel Website URL"
        value={hotelWebsiteUrl}
        onChange={(ev) => sethotelWebsiteUrl(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Hotel Phone Number"
        value={hotelPhoneNumber}
        onChange={(ev) => sethotelPhoneNumber(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Hotel Email Address"
        value={hotelEmailAddr}
        onChange={(ev) => sethotelEmailAddr(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Room Types"
        value={roomTypes}
        onChange={(ev) => setroomTypes(ev.target.value)}
      />
      <button className="authbtn" onClick={onClickHandler}>
        Send For Authorization
      </button>
      <h1 className="mt-2">
        Already have an account ?
        <Link to={"/login/hotel"} className="ps-2 text-red-400 font-bold">
          Login Now
        </Link>
      </h1>
    </div>
  );
};

export default HotelRegUI;
