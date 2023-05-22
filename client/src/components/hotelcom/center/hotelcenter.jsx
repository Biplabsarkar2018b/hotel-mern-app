import React from "react";
import HotelCenterCard from "./card";
import LineChart from "../charts/linechart";
import Timingoptions from "./timingoptions";
import DonutChart from "../charts/donutchart";
import Colorandtext from "../charts/colorandtext";


const HotelCenter = () => {

  return (
    <div className="flex flex-col xl:flex-row gap-10">
      <div>
        {/* Overview */}
        <h1 className="text-4xl font-bold text-black">Overview</h1>
        <h1 className="mt-2">Whole data about your business here</h1>
        {/* 3 Cards */}
        <div className="flex flex-col md:flex-row mt-5 gap-6">
          <HotelCenterCard
            icon={
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
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            }
            cardtext={"Today Arrival"}
            number={"340"}
            number2={"3.15%"}
            text={"Last 7 days"}
            bgcolor={"bg-yellow-500"}
          />
          <HotelCenterCard
            icon={
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
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            }
            cardtext={"Today Departure"}
            number={"234"}
            number2={"3.15%"}
            text={"Last 7 days"}
            bgcolor={"bg-blue-500"}
          />
          <HotelCenterCard
            icon={
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
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                />
              </svg>
            }
            cardtext={"Total Booked"}
            number={"421"}
            number2={"3.15%"}
            text={"Last 7 days"}
            bgcolor={"bg-green-700"}
          />
        </div>
        {/* Chart */}
        <h1 className="my-7  text-2xl font-bold">Revenue Stats</h1>
        {/* Timing Options */}
        <div className="flex gap-3 mb-6">
          <Timingoptions text={"Day"} />
          <Timingoptions text={"Weeks"} />
          <Timingoptions text={"Month"} />
          <Timingoptions text={"Year"} />
        </div>
        <LineChart />
      </div>

      <div className="flex flex-col text-white justify-center">
        <div className="flex flex-col items-center rounded-3xl gap-6 py-24 px-7 bg-orange-500">
          <h1 className="text-4xl font-bold">Reservations</h1>
          <div className="flex items-center">
            {/* Chart */}
            <DonutChart />
            {/* Chart Info */}
            <div className="flex flex-col">
              <Colorandtext color={"bg-blue-500"} text={"Confirmed"} />
              <Colorandtext color={"bg-green-400"} text={"Checked In"} />
              <Colorandtext color={"bg-yellow-400"} text={"Checked Out"} />
            </div>
          </div>
          <div>
            {/* Total Revenue */}
            <h1 className="text-3xl font-bold">$86,000</h1>
            <h1>Total revenue this week</h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCenter;
