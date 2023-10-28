import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axiosClient from "../utils/axiosClient"; // Import your axiosClient
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const [hotelsData, setHotelsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const navigateToUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  useEffect(() => {
    // Make an authenticated request using axiosClient
    axiosClient
      .get("http://localhost:4001/admin") // Use the correct API endpoint
      .then((response) => {
        console.log(response);
        // console.log(response.data);
        setHotelsData(response);
        setLoading(false); // Data has loaded
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false); // Data failed to load
      });
  }, []);

  if (loading) {
    console.log("loading");
    return <p>Loading...</p>;
  }

  if (!Array.isArray(hotelsData) || hotelsData.length === 0) {
    console.log("No data");
    return <p>No data available.</p>;
  }

  return (
    <div className="pl-6">
      <Navbar />
      <div className="px-4 sm:px-20 py-7 max-w-8xl mx-auto flex flex-wrap gap-7">
      <button className="bg-red-500 hover-bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => navigate('/create')}>List new hotel</button>
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
              <div className="flex space-x-3">
              <button className="bg-red-500 hover-bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=>{
                axiosClient.delete(`http://localhost:4001/hotel/${hotel._id}`, hotel)
                
              }}>Delete</button>
              
              <button className="bg-red-500 hover-bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => navigateToUpdate(hotel._id)}>Update</button>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;