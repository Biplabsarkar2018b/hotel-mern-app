import React from "react";
import RateAndInventoryCard from "../../widgets/rateandinventorycard";

const Rateinventory = () => {
  return (
    <div className="flex flex-col gap-4">
     <div className="flex flex-col">
       {/* Title */}
       <h1 className="text-3xl font-bold">
        All your properties are shown below
      </h1>
      {/* subtitle */}
      <h1 className="mb-7">
        You can <span className="font-bold">Block</span>,{" "}
        <span className="font-bold">Open</span>,{" "}
        <span className="font-bold">Increase</span> or{" "}
        <span className="font-bold">Decrease</span> Prices of Rooms Here
      </h1>
     </div>
      <RateAndInventoryCard />
      <RateAndInventoryCard />
      <RateAndInventoryCard />
      <RateAndInventoryCard />
    </div>
  );
};

export default Rateinventory;
