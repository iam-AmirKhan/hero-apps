import React from 'react';
import FiImg from '../../assets/play.png';
import AppImg from '../../assets/Group.png';
import heroImg from '../../assets/hero.png';

const Banner = () => {
  return (
    <div>
      {/* Top Text Section */}
      <div>
        <h1 className='text-center mt-18 text-5xl font-bold mx-auto mb-3'>
          We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps
        </h1>
        <p className='text-center text-gray-600 mb-5'>
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
      </div>

      {/* Store Buttons */}
      <div className='mb-15 flex justify-center items-center gap-3'>
        <div className='flex gap-1 border p-2 rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <img src={FiImg} alt="Google Play" className='w-6 h-6' />
          <p>Google Play</p>
        </div>

        <div className='flex gap-2 border p-2 px-4 rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <img src={AppImg} alt="App Store" className='w-6 h-6' />
          <p>App Store</p>
        </div>
      </div>

      {/* Hero Image */}
      <img src={heroImg} alt="Hero Banner" className='justify-center mx-auto' />

      {/* Gradient Section */}
      <div className='w-full h-[310px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-center items-center text-white'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Trusted by Millions, Built for You</h1>

        <div className='flex justify-around items-center w-full max-w-4xl text-center'>
          <div>
            <p className='text-sm opacity-80'>Total Downloads</p>
            <p className='text-4xl font-bold p-3'>29.6M</p>
            <p className='text-sm opacity-80'>21% more than last month</p>
          </div>

          <div>
            <p className='text-sm opacity-80'>Total Reviews</p>
            <p className='text-4xl font-bold p-3'>906K</p>
            <p className='text-sm opacity-80'>46% more than last month</p>
          </div>

          <div>
            <p className='text-sm opacity-80'>Active Apps</p>
            <p className='text-4xl font-bold p-3'>132+</p>
            <p className='text-sm opacity-80'>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
