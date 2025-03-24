import React from 'react';
import hero from "../assets/hero.png"; 

const Hero = () => {
  return (
    <div className='w-full flex justify-center bg-white'>
      <img className='w-full max-w-[1400px] h-auto' src={hero} alt='Hero' />
    </div>
  );
};

export default Hero;
