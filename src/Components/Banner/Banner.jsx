import React from 'react';
import FiImg from '../../assets/play.png'
import AppImg from '../../assets/Group.png'
const Banner = () => {
    return (
        <div>
            <div>
      <h1 className='text-center mt-18 text-5xl font-bold mx-auto mb-3'>We Build <br /> Productive Apps</h1>
     <p className='text-center text-gray-600 mb-5'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className=' mb-15 flex justify-center items-center gap-3'> 
            <div className='flex gap-1 border-1 p-2 transition-transform duration-300 hover:scale-105'>
             <img src={FiImg} alt="Google Play" className='w-6 h-6' />
             <p >Google Play</p>
             </div> 
             <div className='flex gap-2 border-1 p-2 px-4 transition-transform duration-300 hover:scale-105'>
                 <img src={AppImg} alt="App Store" className='w-6 h-6' />
             <p>App Store</p>
                </div>           
            </div>

        </div>
    );
};

export default Banner;