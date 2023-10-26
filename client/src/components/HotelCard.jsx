import React from 'react';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function HotelCard({ title, location, distance, date, price }) {
  return (
    <div className='px-2 font-sans'>
      <ImageSlider className='flex' slides={SliderData} /> 
      <div className="pt-2 px-1">
        <div className="font-bold">{location}</div>
        <div className="text-gray-500 ">{distance}</div>
        <div className="text-gray-500 ">{date}</div>
        <div>
          <span className="font-bold">{price}</span>
          <span className="text-gray-500"> per night</span>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;

