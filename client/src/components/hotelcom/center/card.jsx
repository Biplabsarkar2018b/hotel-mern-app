import React from "react";

const HotelCenterCard = ({
  icon,
  bgcolor,
  cardtext,
  number,
  text,
  number2,
}) => {
  return (
    <div className="flex flex-col border pt-5 pb-6 ps-3 pr-7 gap-1 shadow-md shadow-gray-300 rounded-3xl">
      {/* icon */}
      <div className="flex items-center">
        <div className={`rounded-full ${bgcolor} p-3 text-white`}>{icon}</div>
      </div>
      {/* text */}
      <h1 className="font-bold">{cardtext}</h1>
      {/* numbers */}
      <div className="flex items-center">
        {/* number */}
        <h1 className="text-black text-2xl font-bold">{number}</h1>
        {/* icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 ms-2 text-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
          />
        </svg>

        {/* number */}
        <h1 className="text-sm text-green-500">{number2}</h1>
      </div>
      {/* text */}
      <h1 className="text-sm">{text}</h1>
    </div>
  );
};

export default HotelCenterCard;
