import React from "react";
import heroImage from "./works/bg.png";

// const Hero = () => (
//   <section className="h-screen flex flex-col justify-center">
//     {/* Image Section */}
//     <div className="flex-1 bg-cover bg-center bg-white" style={{ backgroundImage: `url(${heroImage})` }}>
//       {/* The image section will take the full height of the screen */}
//     </div>

//     {/* Text Section */}
//     <div className="bg-black bg-opacity-50 p-4 text-center text-white">
//       <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
//         Welcome to Vitthal Infra
//       </h1>
//       <p className="text-xl sm:text-2xl md:text-3xl">
//         Building the Future with Quality and Innovation
//       </p>
//     </div>
//   </section>
// );

// export default Hero;

const Hero = () => (
  <section className="h-screen flex flex-col justify-between">
    {/* Image Section */}
    {/* <div
      className="flex-1 bg-cover bg-center h-full bg-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* The image section will take the full height of the screen */}
    {/* </div> */}
    <div className="flex items-center justify-center h-screen bg-white">
      <img
        src={heroImage}
        alt="Hero"
        className="object-contain max-w-full max-h-full"
      />
    </div>

    {/* Text Section */}
    <div className="bg-black bg-opacity-50 p-6 sm:p-8 lg:p-12 text-center text-white">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 animate-fade-in">
        Welcome to Vitthal Infra
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Building the Future with Quality and Innovation
      </p>
    </div>
  </section>
);

export default Hero;
