import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "./card";

const Carousal1 = () => {



    const images = [
        'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/678725/pexels-photo-678725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2884866/pexels-photo-2884866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/947185/pexels-photo-947185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/947185/pexels-photo-947185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/947185/pexels-photo-947185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/947185/pexels-photo-947185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/947185/pexels-photo-947185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
        {images.map((item,ind)=>(
            <CarouselCard key={ind} image={item}/>
        ))}
    </Carousel>
  );
};

export default Carousal1;
