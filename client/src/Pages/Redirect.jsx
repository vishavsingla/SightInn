import React, { useState, useEffect } from "react";
import axiosClient from "../utils/axiosClient";
// import HotelCard from '../components/HotelCard';

export default function Redirect() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch all hotels
    const fetchHotels = async () => {
      try {
        const response = await axiosClient.get("/hotels");
        if (response.status === 200) {
          setHotels(response.data);
        }
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div>
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel._id}
          title={hotel.title}
          location={hotel.location}
          // ... other hotel data
        />
      ))}
    </div>
  );
}
