import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserRegUI = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const handleOnClick = async (ev) => {
    const data = { name, email, phone, password, city, state, pincode };
    const url = "https://hotel-mern-app.vercel.app/register/user";

    axios
      .post(url, data)
      .then((response) => {
        if (response.status == 200){
           alert("Success");
           localStorage.setItem('userData',JSON.stringify(response.data));
        }
      })
      .catch((error) => alert("Email or Phone is already a user"));
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(ev) => setname(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(ev) => setemail(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(ev) => setphone(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Create Password"
        value={password}
        onChange={(ev) => setpassword(ev.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(ev) => setcity(ev.target.value)}
      />
      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(ev) => setstate(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Pincode"
        value={pincode}
        onChange={(ev) => setpincode(ev.target.value)}
      />
      <button className="authbtn" onClick={handleOnClick}>
        Register
      </button>
      <h1 className="mt-2">
        Already have an account ?
        <Link to={"/login/user"} className="ps-2 text-red-400 font-bold">
          Login Now
        </Link>
      </h1>
    </div>
  );
};

export default UserRegUI;
