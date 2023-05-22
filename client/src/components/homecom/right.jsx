import React from "react";
import Upperright from "./right/upperright";

const RightDiv = () => {
  return (
    <div className="flex flex-col mt-5 pr-2">
      {/* DP, Name,About, Dropdown */}
      <Upperright />
      {/* Separator */}
      <div className="h-[0.1px] bg-gray-500 mt-7 mb-4"></div>
      {/* Hotel Name */}
      <h1 className="text-xl font-bold">Shikara Hotel</h1>
      {/* Hotel photos */}
      <div className="flex gap-3">
        <div>
          <img
          className="w-40 h-40 rounded-2xl object-cover"
            src="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80"
            alt="Hotel Photo"
          />
        </div>
        <div className="flex flex-col gap-8">
        <img
          className="w-16 h-16 rounded-2xl object-cover"
            src="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80"
            alt="Hotel Photo"
          />
          <img
          className="w-16 h-16 rounded-2xl object-cover"
            src="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80"
            alt="Hotel Photo"
          />
        </div>
      </div>
    </div>
  );
};

export default RightDiv;
