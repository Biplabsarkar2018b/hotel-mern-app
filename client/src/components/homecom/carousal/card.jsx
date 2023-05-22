import React from "react";

const CarouselCard = ({image}) => {
  return (
    <div className="flex flex-col m-3">
      <img
        className="shadow-lg cursor-pointer shadow-black w-30 h-40 object-cover rounded-2xl"
        src={image}
        alt="photo"
      />
      <h1 className="text-2xl">Delhi</h1>
      <h1 className="text-sm">123,123 properties</h1>
    </div>
  );
};

export default CarouselCard;
