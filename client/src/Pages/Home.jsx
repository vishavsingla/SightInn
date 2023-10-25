import React from 'react';

import HotelCard from '../components/HotelCard';
import hotel from '../assets/hotel.jpeg';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className='pl-6'>
      <Navbar />

      <div className='py-5 px-4 sm:px-20'>
        <button className="flex space-x-3 bg-white-400 border border-gray-200 hover-bg-gray-300 ml-auto mx-5 text-gray font-semibold py-2 px-4 rounded-lg">
          <div>Filters</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
              <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          </div>
        </button>
      </div>

      <div className="px-4 sm:px-20 py-7 max-w-8xl mx-auto flex flex-wrap gap-7">
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />
        <HotelCard
          title={hotel}
          location="Jaipur, India"
          distance="416 km away"
          date="1-6 Nov"
          price="₹33,521"
        />

      </div>
    </div>
  );
}

export default Home;

