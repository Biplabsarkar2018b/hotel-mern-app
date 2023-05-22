import React from "react";
import Carousal3 from "../carousal/carousal3";
import Slider from "../slider/slider";

const SelectionCard = () => {
  return (
    <div className="flex flex-col justify-start w-75 rounded-xl shadow-md shadow-black">
    {/* Carousal */}
      <div className="w-full h-70">
        <Carousal3 />
        {/* <Slider/> */}
      </div>

      <div className="flex flex-col gap-3 py-3 px-4 rounded-b-xl text-white bg-slate-500">
        <div className="font-bold">Entire Cabin | 10 beds</div>
        <div className="flex items-center gap-3">
          <div className="bg-green-600 text-white font-bold p-2 rounded-full">ADS</div>
          <h1 className="text-ellipsis font-bold">Best Western Cedars</h1>
        </div>
        <div className="flex">
          {/* location pin icon */}
          <div>
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
          <div>1 Anzinger Court</div>
        </div>
        <div className="flex justify-between">
          <div>
            <span className="font-bold">$26</span>/night
          </div>
          <div className="flex">
            {/* Star Icon */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="font-bold">4.8</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionCard;
