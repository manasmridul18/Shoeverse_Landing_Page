import React from 'react';
import formal from "../assets/formal.jpg"; 
import casual from "../assets/casual.jpg"; 
import sports from "../assets/sports.jpg"; 

const ShoeCategories = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-center gap-8 py-10 px-4 sm:px-8 lg:px-16'>
      {/* Formal Shoes */}
      <div className='w-full md:w-1/3 flex flex-col items-center border border-gray-300 p-6 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Formal Shoes</h2>
        <div className='w-full h-48 bg-gray-200 flex justify-center items-center rounded-lg cursor-pointer'>
          <p className='text-gray-500'><img src={formal} alt="" /></p>
        </div>
      </div>

      {/* Casual Shoes */}
      <div className='w-full md:w-1/3 flex flex-col items-center border border-gray-300 p-6 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Casual Shoes</h2>
        <div className='w-full h-48 bg-gray-200 flex justify-center items-center rounded-lg cursor-pointer'>
          <p className='text-gray-500'><img src={casual} alt="" /></p>
        </div>
      </div>

      {/* Sports Shoes */}
      <div className='w-full md:w-1/3 flex flex-col items-center border border-gray-300 p-6 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Sports Shoes</h2>
        <div className='w-full h-48 bg-gray-200 flex justify-center items-center rounded-lg cursor-pointer'>
          <p className='text-gray-500'><img src={sports} alt="" /></p>
        </div>
      </div>
    </div>
  );
};

export default ShoeCategories;
