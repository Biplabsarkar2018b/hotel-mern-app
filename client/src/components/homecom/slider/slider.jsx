import React, { useState } from 'react';

const Slider = () => {
    const images = [
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <div className="relative">
      <img className="w-full" src={images[currentImage]} alt="Slider Image" />

      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-500 text-white px-2 py-1 rounded-l"
        onClick={handlePrev}
      >
        Prev
      </button>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-500 text-white px-2 py-1 rounded-r"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;