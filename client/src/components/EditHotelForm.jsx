import React, { useState, useEffect } from 'react';
import axiosClient from '../utils/axiosClient';

function EditHotelForm({ hotelId }) {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    pricePerNight: 0,
    capacity: 0,
    amenities: '',
    images: '',
  });

  useEffect(() => {
    // Fetch existing hotel data based on hotelId and set formData with the data
    async function fetchHotelData() {
      try {
        const response = await axiosClient.get(`/hotels/${hotelId}`);
        if (response.status === 200) {
          setFormData(response.data); // Set formData with the existing hotel data
        } else {
          // Handle the case where fetching the data failed
        }
      } catch (error) {
        console.error('An error occurred while fetching hotel data:', error);
      }
    }

    fetchHotelData();
  }, [hotelId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosClient.put(`/hotels/${hotelId}`, formData);

      if (response.status === 200) {
        console.log('Hotel details updated successfully');
      } else {
        console.log('Hotel details update failed');
        // Handle the error as needed
      }
    } catch (error) {
      console.error('An error occurred while updating hotel details:', error);
      // Handle the error as needed, e.g., show an error message to the user
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Title"
          />
        </div>
        {/* Add similar input fields for other hotel properties, e.g., location, description, etc. */}
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Hotel
          </button>
        </div>
      </form>
    </div>
  );
  
}

export default EditHotelForm;
