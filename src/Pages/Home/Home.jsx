import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Apps from '../Apps/Apps';
import { useLoaderData, Link } from 'react-router';

const Home = () => {
    const data=useLoaderData();
   
    return (
        <div>
            <Banner></Banner>
            <Apps data={data} showAll={false}></Apps>
            <div className="text-center mt-10 mb-16">
        <Link
          to="/apps"
          className="px-6 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          Show All
        </Link>
      </div>

        </div>
    );
};

export default Home;