import React from 'react';
import ImageSlider from './ImageSlider'; // Import the ImageSlider component
import { SliderData } from './SliderData';

function HotelCard({ title, location, distance, date, price }) {
  return (
    <div className='px-2 font-sans'>
      <ImageSlider className='flex' slides={SliderData} /> {/* Use the ImageSlider component here */}
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



// import React from 'react';
// import hotel from './hotel.jpeg';

// function HotelCard() {
//   return (
//     <div className='px-2 font-sans'>
//       <img src={hotel} alt="Hotel Image" className="rounded-2xl h-80 w-80" />
//       <div className="pt-2 px-1">
//         <div className="font-bold">Jaipur, India</div>
//         <div className="text-gray-500 ">416 km away</div>
//         <div className="text-gray-500 ">1-6 Nov</div>
//         <div>
//           <span className="font-bold">₹33,521</span>
//           <span className="text-gray-500"> per night</span>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default HotelCard;
