import React from "react";
import HotelSidebar from "./sidebar/sidebar";
import HotelCenter from "./center/hotelcenter";
import HotelRight from "./right/hotelright";
import { useSelector } from "react-redux";
import Bookinglist from "./center/pages/bookinglist";
import Rateinventory from "./center/pages/rateinventory";
import Userdetail from "./center/pages/userdetail";
import Promotion from "./center/pages/promotion";
import Payment from "./center/pages/payment";
import Review from "./center/pages/review";
import Settings from "./center/pages/settings";
import Report from "./center/pages/report";
import Photos from "./center/pages/photos";
import MobileSidebar from "./widgets/mobilesidebar";

const HotelIndex = () => {
  const centerPageSelection = useSelector((state) => state.hotelpage);
  return (
    <div className="w-screen h-screen flex">
      <div className="hidden lg:block min-w-fit h-full">
        {/* Sidebar */}
        <HotelSidebar />
      </div>
      <div className="xs:px-0 md:px-10 pt-5 sm:w-full md:w-full lg:flex-grow h-full overflow-x-auto scrollable">
        <nav className="fixed block md:hidden top-0 left-0 w-full">
          {/* Navbar content here */}
          <MobileSidebar/>
        </nav>
        {/* Center Page */}
        {/* Selected according to centerpageselection */}
        {centerPageSelection.page === "dashboard" && <HotelCenter />}
        {centerPageSelection.page === "bookinglist" && <Bookinglist />}
        {centerPageSelection.page === "rate" && <Rateinventory />}
        {centerPageSelection.page === "userdetails" && <Userdetail />}
        {centerPageSelection.page === "promotion" && <Promotion />}
        {centerPageSelection.page === "payment" && <Payment />}
        {centerPageSelection.page === "review" && <Review />}
        {centerPageSelection.page === "settings" && <Settings />}
        {centerPageSelection.page === "report" && <Report />}
        {centerPageSelection.page === "photos" && <Photos />}
      </div>
      <div className="hidden lg:block max-w-sm h-full">
        {/* Right Div, user profile such things */}
        <HotelRight />
      </div>
    </div>
  );
};

export default HotelIndex;
