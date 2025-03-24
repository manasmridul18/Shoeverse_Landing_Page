import React from 'react';
import Hero from '../components/Hero';
import ShoeCategories from '../components/ShoeCategories';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <Hero />
      <ShoeCategories />
      <Footer />
    </div>
  );
};

export default Home;
