import React from "react";
import { useSelector } from "react-redux";

const Upperright = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="flex items-center justify-between">
      {/* DP */}
      <div>
        <img
          className="w-10 h-10 object-cover rounded-full"
          src={
            user.state.user.about ||
            "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80"
          }
          alt="User Image"
        />
      </div>
      {/* Column for name and about */}
      <div className="flex flex-col">
        <h1 className="text-sm font-bold">{user.state.user.name || user.state.user.hotelname}</h1>
        <h2 className="text-xs">
          {user.state.user.accountType || "Traveler Enthusiast"}
        </h2>
      </div>
      {/* Drop Down Icon */}
      <div className="hover:bg-gray-200 hover:rounded-full p-3 cursor-pointer hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Upperright;
