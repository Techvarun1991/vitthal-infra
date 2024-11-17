import React from 'react';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';


function App() {
  return (
    <div>
      <Hero></Hero>
      <HeroCarousel />
      <Features />
      <Products />
      <Partners></Partners>
      <Footer />
    </div>
  );
}

export default App;

