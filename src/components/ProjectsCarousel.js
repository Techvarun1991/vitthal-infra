import React from 'react';
import Slider from 'react-slick';

const ProjectsCarousel = () => {
  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 2, slidesToScroll: 1 };

  const projectData = [
    { title: "Completed Project 1", description: "Description of project 1", image: "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Future Project 1", description: "Description of future project", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];

  return (
    <section className="py-10 bg-white">
      <h2 className="text-center text-3xl font-bold mb-6">Our Projects</h2>
      <Slider {...settings}>
        {projectData.map((project, index) => (
          <div key={index} className="px-4">
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <img src={project.image} alt={project.title} className="mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProjectsCarousel;
