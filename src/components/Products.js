import React from 'react';
import picture1 from './works/1.jpeg'
import picture2 from './works/2.jpeg'
import picture3 from './works/3.jpeg'
import picture4 from './works/4.jpeg'
import picture5 from './works/5.jpeg'
import picture6 from './works/6.jpeg'
import picture8 from './works/8.webp'
import picture9 from './works/9.jpg'

const items = [
  {
    id: 1,
    image: picture5,
    title: 'Road Contracts',
    description: 'Specializing in durable road construction for all types of pathways.',
  },
  {
    id: 2,
    image: picture2,
    title: 'Building Construction',
    description: 'Expertise in residential and commercial construction projects.',
  },
  {
    id: 3,
    image: picture9,
    title: 'Plumbing',
    description: 'Efficient plumbing and stunning painting services for your spaces.',
  },
  {
    id: 4,
    image: picture8,
    title: 'Paver Block Contracts',
    description: 'Ensuring safe and beautiful pathways for public spaces.',
  },
  {
    id: 5,
    image: picture6,
    title: 'House Contracts',
    description: 'Building your dream homes with precision and care.',
  },
  {
    id: 6,
    image: picture4,
    title: 'Painting Contracts',
    description: 'Adding color to your spaces with expert painting services.',
  },
];

export default function Showcase() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
            Our Featured Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our diverse range of professional construction services.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
              <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
