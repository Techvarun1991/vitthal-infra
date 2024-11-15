import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EquipmentCarousel = () => {
  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1 };

  const equipmentImages = [
    'https://media.istockphoto.com/id/817585012/photo/construction.jpg?s=1024x1024&w=is&k=20&c=zGSwPUI2g4uuu7lEcGlOl2sJAAafQwm4-o3EbjWojz0=', // Equipment 1
    'https://plus.unsplash.com/premium_photo-1681690860621-57d749a22f34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Equipment 2
    'https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D '] ;

  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-6">Our Equipment</h2>
      <Slider {...settings}>
        {equipmentImages.map((src, index) => (
          <div key={index} className="px-4">
            <img src={src} alt={`Equipment ${index + 1}`} className="rounded-lg shadow-lg w-full" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default EquipmentCarousel;
