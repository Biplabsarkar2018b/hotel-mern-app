import React from "react";
import HalfDonut from "../charts/halfdonut";

const CustomerSatis = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-300 rounded-lg py-3 flex flex-col items-center">
      {/* text */}
      <h1 className="text-3xl font-bold">Customer Satisfaction</h1>

      {/* half donut */}
      <HalfDonut />

      {/* text */}
      <h1 className="text-center">
        Improve your service to increase the score of customer satisfactions
      </h1>

      {/* see customer reviews */}
      <div className="rounded-full px-10 font-bold py-2 bg-white text-black">
        See Customer Reviews
      </div>
    </div>
  );
};

export default CustomerSatis;
