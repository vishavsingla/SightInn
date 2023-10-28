import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axiosClient from '../utils/axiosClient'; 

import { KEY_ACCESS_TOKEN, getItem,setItem } from '../utils/localStorageManager';
import { isLogin } from '../utils/auth';

function BookingForm({hotelId}) {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const authenticate = async () => {
      const loggedIn = await isLogin();
      console.log(loggedIn);
      if (loggedIn.auth) {
        setUser(loggedIn.data);
    } 
    };
    authenticate();
  }, []);


  const handleBookHotel = () => {
    const hotelId = hotelId;
    
    const bookingData = {
      user: userId,
      hotel: hotelId,
      checkInDate,
      checkOutDate,
      specialRequests: 'Any special requests',
      numberOfGuests: 2,
    };

    axiosClient
      .post(`/book/${hotelId}`, bookingData)
      .then((response) => {
        if (response.status === 200) {
          console.log('Booking successful');
        } else {
          console.error('Booking failed');
        }
      })
      .catch((error) => {
        console.error('Error sending booking request:', error);
      });
  };

  return (
    <div>
      <div>
        <label>Check-In Date:</label>
        <DatePicker selected={checkInDate} onChange={(date) => setCheckInDate(date)} />
      </div>
      <div>
        
        <label>Check-Out Date:</label>
        <DatePicker selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} />
      </div>
      <button onClick={handleBookHotel}>Book Hotel</button>
    </div>
  );
}

export default BookingForm;
