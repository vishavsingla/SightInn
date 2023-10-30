import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosClient from "../utils/axiosClient";

import {
  KEY_ACCESS_TOKEN,
  getItem,
  setItem,
} from "../utils/localStorageManager";
import { isLogin } from "../utils/auth";

function BookingForm() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [userId, setuserId] = useState();

  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const authenticate = async () => {
      const loggedIn = await isLogin();
      console.log(loggedIn);
      if (loggedIn.auth) {
        setUser(loggedIn.data);
        setuserId(loggedIn.data._id);
      }
    };
    authenticate();
  }, []);

  const handleBookHotel = () => {
    const hotelId = "653a5a096b07a1c95aa54da7";

    const bookingData = {
      user: userId,
      hotel: hotelId,
      checkInDate,
      checkOutDate,
      specialRequests: "Any special requests",
      numberOfGuests: 2,
    };

    axiosClient
      .post(`/book/${hotelId}`, bookingData)
      .then((response) => {
        if (response.status === 'ok') {
          console.log("Booking successful");
        } else {
          console.error("Booking failed. Response status:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error sending booking request:", error);
      });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Book a Hotel</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="checkInDate" className="block text-gray-900 font-semibold mb-2">
            Check-In Date:
          </label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="checkOutDate" className="block text-gray-900 font-semibold mb-2">
            Check-Out Date:
          </label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="guests" className="block text-gray-900 font-semibold mb-2">
            Number of Guests:
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            className="w-full border rounded p-2"
          />
        </div>
        <button
          type="button"
          onClick={handleBookHotel}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
