import React from "react";

const NearbyPlacesCard = () => {
  return (
    <div className="flex gap-5 px-2 py-2 hover:cursor-pointer rounded-3xl bg-slate-200 hover:shadow-md hover:shadow-gray-500">
      <div>
        <img
          className="rounded-full w-[5rem] h-[5rem]"
          src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Place"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-end">
          <span className="bg-gray-300 text-end px-1 rounded-full">
            1,882
          </span>
        </div>
        <h1 className="text-base font-bold text-black">New York</h1>
        <h1>19 minutes drive</h1>
      </div>
    </div>
  );
};

export default NearbyPlacesCard;
