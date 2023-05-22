import React from "react";

const UpcomingList = () => {
  return (
    <div className="flex border-b shadow-sm p-2 justify-between items-center">
      <div className="flex items-center gap-2">
        {/* dp */}
        <img
          className="w-10 h-10 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1555320818-21ebf0faf145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=364&q=80"
          alt="user image"
        />
        <div className="flex flex-col">
          {/* name */}
          <h1 className="text-sm font-bold">Ananya Sharma</h1>
          {/* about */}
          <h1 className="text-xs">Overnight - 24 Jun - 27 Jun</h1>
        </div>
      </div>

      {/* right arrow */}
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
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

export default UpcomingList;
