import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../store/userslice';

const HotelLoginUI = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleOnclick = async (ev) => {
        const url = "http://localhost:3300/login/hotel";
        const data = { email, password };
        try{
            axios
          .post(url, data)
          .then((response) => {
            if (response.status == 200) {
              alert("Success Login");
              dispatch(setUser(response.data));
              navigate("/hotelhome");
            }
          })
        }catch(error){
            console.log(error);
        }
      };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <input
        type="text"
        placeholder="Enter Owner Email"
        value={email}
        onChange={(ev) => setemail(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Owner Password"
        value={password}
        onChange={(ev) => setpassword(ev.target.value)}
      />
      <button className="authbtn" onClick={handleOnclick}>
        Login
      </button>
      <h1 className="mt-2">
        don't have an account ?
        <Link to={"/register"} className="ps-2 text-red-400 font-bold">
          Register Now
        </Link>
      </h1>
    </div>
  )
}

export default HotelLoginUI