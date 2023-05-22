import React, { useState } from "react";
import HotelSidebar from "../sidebar/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { sidebarShowHide } from "../../../store/sidebarmobile";

const MobileSidebar = () => {
    const dispatch = useDispatch();
    const isSidebar = useSelector((state)=>state.sidebarmobile);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    dispatch(sidebarShowHide(!isSidebar.isOpen));
  };

  return (
    <div className="flex items-start">
      {/* Sidebar button for mobile */}
      <button className="block md:hidden" onClick={toggleSidebar}>
        {/* SVG icon for sidebar toggle */}
        {isSidebarOpen ? (
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
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
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        )}
      </button>

      {/* Sidebar content */}
      <div className={`w-full ${isSidebar.isOpen ? "block" : "hidden"}`}>
        {/* Sidebar content here */}
        <HotelSidebar/>
      </div>

      {/* Main content */}
      <div className="flex-grow">{/* Main content here */}</div>
    </div>
  );
};

export default MobileSidebar;
