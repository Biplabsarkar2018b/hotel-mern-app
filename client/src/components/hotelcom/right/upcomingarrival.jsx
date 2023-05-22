import React from "react";
import UpcomingList from "./upcominglist";

const UpcomingArrival = () => {
  return (
    <div className="flex flex-col">
      {/* text and 3dots */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Upcoming Arrival</h1>
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
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
      {/* List of Users */}
      <UpcomingList />
      <UpcomingList />
      <UpcomingList />
    </div>
  );
};

export default UpcomingArrival;
