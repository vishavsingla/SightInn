import React from 'react';
import { AvatarIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import logo from './logo.png';
import HotelCard from './HotelCard';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import hotel from '../components/hotel.jpeg'

function SearchBar({ placeholder, onSearch }) {
  return (
    <div className="flex items-center rounded-full bg-white-400 px-3 shadow-md border border-gray-100">
      <div className="rounded-full w-8 h-8 bg-crimson flex items-center justify-center">
        <MagnifyingGlassIcon className="h-5 w-5 text-white font-bold" />
      </div>
      <input
        id="search"
        className="bg-transparent p-2 text-gray-700 outline-none w-96 h-12"
        type="text"
        placeholder={placeholder}
        onKeyUp={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

function Home() {
  const selectedItemId = 1;
  const handleClick = (itemId) => {
    console.log(`Clicked on item with ID: ${itemId}`);
  };

  return (
    <div className='pl-6'>
      <div className="px-20 shadow-sm">
        <div className="flex items-center justify-between max-w-8xl mx-auto p-5">
          <div className='h-35 w-35'>
            <img src={logo} alt="Logo" className="h-15 w-20" />
          </div>

          <SearchBar placeholder="Search..." onSearch={(query) => console.log(query)} />

          <div className="flex items-center space-x-10">
            <div className="text-lg font-sans text-gray">Explore cities</div>
            <AvatarIcon className="h-10 w-10 text-crimson" />
          </div>
        </div>
      </div>

      <div className='py-5 px-20'>
        <button className="flex space-x-3 bg-white-400 border border-gray-200 hover-bg-gray-300 ml-auto mx-5 text-gray font-semibold py-2 px-4 rounded-lg">
          <div>Filters</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
              <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          </div>
        </button>
      </div>

      <div className="px-20 py-7 max-w-8xl mx-auto flex flex-wrap gap-7">
        
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

        {/* Repeat HotelCard for other items as needed */}
      </div>
    </div>
  );
}

export default Home;

