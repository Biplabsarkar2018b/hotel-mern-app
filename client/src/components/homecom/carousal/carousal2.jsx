import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Places from "./places";

const Carousal2 = () => {
  const places = [
    "Delhi",
    "Bengaluru",
    "Pune",
    "Chennai",
    "Shimla",
    "Manali",
    "Kashmir",
    "Mumbai",
    "Uttarakhand",
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 1300 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1300, min: 700 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 700, min: 450 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel draggable={true} responsive={responsive}>
      {places.map((item, ind) => (
        <Places place={item} key={ind} />
      ))}
    </Carousel>
  );
};

export default Carousal2;
