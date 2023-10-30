import React, { useState, useEffect } from "react";
import axiosClient from "../utils/axiosClient";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

function EditHotelForm() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    pricePerNight: 0,
    capacity: 0,
    amenities: "",
    images: "",
  });
  const { id } = useParams();
  useEffect(() => {
    // Fetch hotel data for the logged-in user and populate the form fields
    const fetchHotelData = async () => {
      try {
        console.log("above");
        console.log(id);
        const response = await axiosClient.get(`/hotel/${id}`);
        console.log("below");
        // Replace with your API endpoint to fetch hotel data

        console.log("API Response:", response); // Debugging: Log the response

        if (response.status === "ok") {
          // If data exists, populate the form fields
          const hotelData = response.statusCode; // Replace with your hotel data structure
          console.log("Hotel Data:", hotelData); // Debugging: Log the hotel data

          setFormData({
            title: hotelData.title,
            location: hotelData.location,
            description: hotelData.description,
            pricePerNight: hotelData.pricePerNight,
            capacity: hotelData.capacity,
            amenities: hotelData.amenities,
            images: hotelData.images,
          });
        }
      } catch (error) {
        console.log("above");
        console.log(useParams());
        console.error("An error occurred while fetching hotel data:", error);
      }
    };

    fetchHotelData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDelete = async () => {
    // Make an API request to delete the hotel
    try {
      const response = await axiosClient.delete(`/hotel/${id}`); // Replace with your API endpoint for deleting hotel

      if (response.status === "ok") {
        console.log("Hotel deleted successfully");
        // Optionally, you can redirect the user to a different page after deletion
      }
    } catch (error) {
      console.error("An error occurred while deleting the hotel:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosClient.put(`/hotel/${id}`, formData); // Replace with your API endpoint for updating hotel data

      if (response.status === "ok") {
        console.log("Hotel updated successfully");
      }
    } catch (error) {
      console.error("An error occurred while updating the hotel:", error);
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="pt-3 w-full max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-gray-200"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Location"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Description"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pricePerNight"
            >
              Price Per Night:
            </label>
            <input
              type="number"
              id="pricePerNight"
              name="pricePerNight"
              value={formData.pricePerNight}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Price Per Night"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="capacity"
            >
              Capacity:
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={formData.capacity}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Capacity"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amenities"
            >
              Amenities:
            </label>
            <input
              type="text"
              id="amenities"
              name="amenities"
              value={formData.amenities}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Amenities"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="images"
            >
              Images (URLs):
            </label>
            <input
              type="text"
              id="images"
              name="images"
              value={formData.images}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Image URLs (comma-separated)"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-crimson hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Hotel
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 hover-bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete Hotel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditHotelForm;
