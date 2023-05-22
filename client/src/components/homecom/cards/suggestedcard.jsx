import React from "react";

const SuggestedCard = ({ image }) => {
  return (
    <div className="m-4 flex flex-col items-center">
      <img className="w-[80] rounded-2xl" src={image} alt="Suggested Photo" />
      <h1 className="font-bold text-lg">Enjoy The Highways</h1>
      <h1 className="">185,554 properties</h1>
    </div>
  );
};

export default SuggestedCard;
