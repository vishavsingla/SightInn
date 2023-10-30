import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import { useNavigate } from "react-router-dom";

function Home() {
  const [hotelsData, getHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4001/hotel")
      .then((response) => {
        console.log(response.data);
        getHotels(response.data);
        setLoading(false); // Data has loaded
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Data failed to load
      });
  }, []);

  if (loading) {
    console.log("loading");
    return <p>Loading...</p>;
  }

  if (hotelsData.length === 0) {
    console.log("No data");
    return <p>No data available.</p>;
  }

  return (
    <div className="pl-6">
      <Navbar />

      <div className="py-5 px-4 sm:px-20">
        <button className="flex space-x-3 bg-white-400 border border-gray-200 hover-bg-gray-300 ml-auto mx-5 text-gray font-semibold py-2 px-4 rounded-lg">
          <div>Filters</div>
          <div>
            <img src="../filter.svg" alt="vite" />
          </div>
        </button>
      </div>

      <div className="px-4 sm:px-20 py-7 max-w-8xl mx-auto flex flex-wrap gap-7 cursor-pointer justify-center">
        {hotelsData.map((hotel) => (
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate(`/booking/${hotel._id}`); // Navigate to the booking page
            }}
          >
            <div className="px-2 font-sans">
              <ImageSlider className="flex" slides={SliderData} />{" "}
              {/* Use the ImageSlider component here */}
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
