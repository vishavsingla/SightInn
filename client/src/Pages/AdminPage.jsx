import React, { useState,useEffect  } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';

function AdminPage() {
    const [hotelsData, getHotels] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get('http://localhost:4001/admin/users')
        
        .then((response) => {
            console.log(response);
          console.log(response.data);
          getHotels(response.data);
          setLoading(false); // Data has loaded
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false); // Data failed to load
        });
    }, []);
  
    if (loading) {
      console.log('loading');
      return <p>Loading...</p>;
    }
    
    if (hotelsData.length === 0) {
      console.log('No data');
      return <p>No data available.</p>;
    }
  
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
      {hotelsData.map((hotel) => (
          <tbody>
            <div className='px-2 font-sans'>
              <ImageSlider className='flex' slides={SliderData} /> {/* Use the ImageSlider component here */}
              <div className="pt-2 px-1">
                <div className="font-bold">{hotel.location}</div>
                <div className="text-gray-500 ">{hotel.distance}</div>
                <div className="text-gray-500 ">{hotel.date}</div>
                <div>
                  <span className="font-bold">{hotel.price}</span>
                  <span className="text-gray-500"> per night</span>
                </div>
              </div>
            </div>
          </tbody>
        ))}

      </div>
    </div>
  );
}

export default AdminPage;