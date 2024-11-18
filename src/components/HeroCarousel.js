import React, { useEffect, useState } from "react";
import picture2 from "./equipments/2.jpeg";
import picture3 from "./equipments/3.jpeg";
import picture4 from "./equipments/4.jpeg";
import picture5 from "./equipments/5.jpeg";
import picture6 from "./equipments/6.jpeg";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [picture2, picture3, picture4, picture5, picture6];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, [images.length]);

  return (
    <div>
      {/* Carousel container */}
      <div className="relative w-full max-w-5xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            id={`item${index + 1}`}
            className={`carousel-item w-full ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            {/* Fixed-size container for each image */}
            <div className="w-full h-[32rem] overflow-hidden">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain" // Ensure image fits inside without stretching or cropping
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex w-full justify-center gap-2 py-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;