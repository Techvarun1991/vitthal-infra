import React from 'react';

const Hero = () => (
  <section className="h-screen flex items-center justify-center bg-cover bg-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
    <div className="text-center text-white p-10 bg-opacity-50 bg-black rounded-lg">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in">Welcome to Vitthal Infra</h1>
      <p className="text-xl">Building the Future with Quality and Innovation</p>
    </div>
  </section>
);

export default Hero;
