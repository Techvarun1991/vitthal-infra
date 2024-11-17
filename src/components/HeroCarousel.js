// import React, { useEffect, useRef, useState } from "react";
// import picture1 from "./equipments/1.jpeg";
// import picture2 from "./equipments/2.jpeg";
// import picture3 from "./equipments/3.jpeg";
// import picture4 from "./equipments/4.jpeg";
// import picture5 from "./equipments/5.jpeg";
// import picture6 from "./equipments/6.jpeg";

// const HeroCarousel = () => {
//   const images = [picture1, picture2, picture3, picture4, picture5, picture6];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideInterval = useRef();

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     clearInterval(slideInterval.current);
//     startAutoSlide();
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const startAutoSlide = () => {
//     slideInterval.current = setInterval(() => {
//       nextSlide();
//     }, 3000);
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return () => clearInterval(slideInterval.current);
//   }, []);

//   return (
//     <div className="relative w-full my-4 bg-gray-100 z-10">
//       {/* Title and description */}
//       <div className="text-center mb-8 px-4">
//         <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900">
//           Our Featured Services
//         </h2>
//         <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-gray-600">
//           Explore our diverse range of professional construction services.
//         </p>
//       </div>

//       {/* Carousel container */}
//       <div className=" w-full max-w-5xl mx-auto z-20">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 w-full h-[500px] transition-opacity duration-500 ease-in-out ${
//               index === currentSlide ? "opacity-100 z-30" : "opacity-0 z-10"
//             }`}
//           >
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full "
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation arrows */}
//       <button
//         className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 sm:p-3 z-30"
//         onClick={prevSlide}
//       >
//         &#10094;
//       </button>
//       <button
//         className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 sm:p-3 z-30"
//         onClick={nextSlide}
//       >
//         &#10095;
//       </button>

//       {/* Pagination dots */}
//       <div className="absolute bottom-2 sm:bottom-4 w-full flex justify-center gap-2 z-30">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
//               index === currentSlide ? "bg-black" : "bg-gray-400"
//             }`}
//             onClick={() => goToSlide(index)}
//           />
//         ))}
//       </div>
//     </div>
//     // <>
//     //   <div className="carousel w-full">
//     //     <div id="item1" className="carousel-item w-full">
//     //       <img
//     //         src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
//     //         className="w-full"
//     //       />
//     //     </div>
//     //     <div id="item2" className="carousel-item w-full">
//     //       <img
//     //         src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
//     //         className="w-full"
//     //       />
//     //     </div>
//     //     <div id="item3" className="carousel-item w-full">
//     //       <img
//     //         src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
//     //         className="w-full"
//     //       />
//     //     </div>
//     //     <div id="item4" className="carousel-item w-full">
//     //       <img
//     //         src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
//     //         className="w-full"
//     //       />
//     //     </div>
//     //   </div>
//     //   <div className="flex w-full justify-center gap-2 py-2">
//     //     <a href="#item1" className="btn btn-xs">
//     //       1
//     //     </a>
//     //     <a href="#item2" className="btn btn-xs">
//     //       2
//     //     </a>
//     //     <a href="#item3" className="btn btn-xs">
//     //       3
//     //     </a>
//     //     <a href="#item4" className="btn btn-xs">
//     //       4
//     //     </a>
//     //   </div>
//     // </>
//   );
// };

// export default HeroCarousel;



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
               className={`carousel-item w-full ${index === currentIndex ? "block" : "hidden"}`}
             >
               {/* Fixed-size container for each image */}
               <div className="w-full h-[32rem] overflow-hidden">
                 <img
                   src={image}
                   alt={`Slide ${index + 1}`}
                   className="w-full h-full object-contain"  // Ensure image fits inside without stretching or cropping
                 />
               </div>
             </div>
           ))}
         </div>
   
         {/* Navigation buttons */}
         <div className="flex w-full justify-center gap-2 py-2">
           {images.map((_, index) => (
             <button
               key={index}
               onClick={() => goToSlide(index)}
               className="btn btn-xs"
             >
               {index + 1}
             </button>
           ))}
         </div>
       </div>
     );
   };
   
   export default HeroCarousel;
   