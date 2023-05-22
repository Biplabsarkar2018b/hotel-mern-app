import React from "react";
import Carousal1 from "./carousal/carousal1";
import Moto from "./moto/moto";
import Dates from "./dates/dates";
import Carousal2 from "./carousal/carousal2";
import SelectionCard from "./cards/selectioncard";
import Carousal4 from "./carousal/carousal4";
import NearbyPlacesCard from "./cards/nearbyplacescard";
import Footer from "../footer/footer";

const CenterDiv = () => {
  return (
    <div className="overflow-scroll scrollable flex flex-col">
      {/* Moto */}
      <div className="my-5 px-5">
        <Moto />
      </div>
      {/* Booking Dates */}
      <div className="sm:px-2 md:px-5">
        <Dates />
      </div>
      {/* Lodging Available */}
      <div className="my-10 text-2xl">Lodging Available</div>
      {/* CAROUSAL */}
      <div className="">
        <Carousal1 />
        <Carousal1 />
      </div>
      {/* Featured Places to stay */}
      <h1 className="text-2xl font-bold my-10">Featured places to stay</h1>
      {/* Places to select from */}
      <div>
        <Carousal2 />
      </div>
      {/* Showing Cards Based on the selected place */}
      <div className="my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <SelectionCard />
        <SelectionCard />
        <SelectionCard />
        <SelectionCard />
        <SelectionCard />
        <SelectionCard />
        <SelectionCard />
        <SelectionCard />
      </div>
      {/* A separator, basically a horizontal line */}
      <div className="mt-10 h-[0.1px] w-full bg-black"></div>
      {/* Suggestions for discovery */}
      {/* Remove the mb-32 later */}
      <div className="text-current flex flex-col items-center mt-28 mb-10">
        <h1 className="text-4xl font-bold">Suggestions for discovery</h1>
        <h1 className="text-xl">
          Popular places to stay that <span className="font-bold">DEMO</span>{" "}
          recommends for you
        </h1>
      </div>
      {/* Suggested Photos */}
      <div className="mb-10">
        <Carousal4 />
      </div>
      {/* Explore Nearby */}
      <div className="text-current flex flex-col items-center mt-28 mb-10">
        <h1 className="text-4xl font-bold">Explore Nearby</h1>
        <h1 className="text-xl">Discover great places near where you live </h1>
      </div>
      {/* Nearby Places Cards */}
      <div className="mt-10 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <NearbyPlacesCard />
        <NearbyPlacesCard />
        <NearbyPlacesCard />
        <NearbyPlacesCard />
        <NearbyPlacesCard />
        <NearbyPlacesCard />
        <NearbyPlacesCard />
        <NearbyPlacesCard />
        <NearbyPlacesCard />
        <NearbyPlacesCard />
        <NearbyPlacesCard />
      </div>

      {/* Footer */}
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default CenterDiv;
