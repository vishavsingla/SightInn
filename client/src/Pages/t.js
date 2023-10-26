import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';

function AdminPage() {
  const [hotelsData, setHotelsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:4001/admin', {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM4ZGZmOGE4NWIzMjc5MmQ2NDI3ODkiLCJpYXQiOjE2OTgzMzY0NTIsImV4cCI6MTY5ODQyMjg1Mn0.LhUaaYzVEGIa0dwkQJ436AZ6hxClZZXPslfpSbIz98o', // Replace with your actual access token
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setHotelsData(response.data);
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

  if (!Array.isArray(hotelsData) || hotelsData.length === 0) {
    console.log('No data');
    return <p>No data available.</p>;
  }

  return (
    <div className="pl-6">
      <Navbar />

      {/* ... Your filtering and UI elements ... */}

      <div className="px-4 sm:px-20 py-7 max-w-8xl mx-auto flex flex-wrap gap-7">
        {hotelsData.map((hotel, index) => (
          <div key={index} className="px-2 font-sans">
            <ImageSlider className="flex" slides={SliderData} />
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
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
