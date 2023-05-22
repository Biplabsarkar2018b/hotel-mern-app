import React from "react";
import Chips from "./chips";

const RateAndInventoryCard = () => {
  return (
    <div className="flex">
        <div className="flex flex-col bg-yellow-300 px-5 py-5 rounded-2xl">
      {/* title */}
      <h1 className="text-3xl font-bold mb-3">Bandra Tutry</h1>
      {/* Images */}
      <div className="flex flex-col sm:flex-row">
      {/* Images Div */}
      <div className="flex gap-1">
        {/* The Big Image */}
        <div>
          <img
            className="w-[208px] h-[211px] object-cover rounded-tl-lg rounded-bl-lg"
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1">
        {/* first small image */}
          <div>
            <img
              className="w-[104px] h-[104px] object-cover rounded-tr-lg"
              src="https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt=""
            />
          </div>
          {/* second small image */}
          <div className="relative">
            <img
              className="w-[104px] h-[104px] object-cover rounded-br-lg"
              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="text-black bg-transparent px-2 py-1 text-2xl font-bold">
                +36
              </span>
            </div>
          </div>
        </div>
      </div>
        {/* Pricing and Other Details */}
        <div className="flex flex-col justify-center ms-8 gap-3">
       <div className="text-gray-800">
       <h1 className="text-xl font-semibold">Current Price :</h1>
          <h1 className="text-2xl font-bold">Rs. 450/night</h1>
       </div>
          <div className="flex gap-3">
            <Chips title={"Increase Price"} />
            <Chips title={"Decrease Price"} />
          </div>
          <div className="flex gap-3">
            <Chips title={"Block Room"} />
            <Chips title={"Open Room"} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RateAndInventoryCard;
