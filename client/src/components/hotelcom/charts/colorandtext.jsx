import React from "react";

const Colorandtext = ({ color, text }) => {
  return (
    <div className="flex items-center gap-1">
      <div className={`rounded-full ${color} w-4 h-4`}></div>
      <h1>{text}</h1>
    </div>
  );
};

export default Colorandtext;
