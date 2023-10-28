import React from 'react';
import Navbar from '../components/Navbar';

function BookingPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  // Array of random image URLs (replace with your image URLs)
  const randomImages = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg',
  ];

  // Function to select a random image from the array
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };

  return (
    <div>
      <Navbar />
      <div>
        {/* Header Section */}
        <header>
          <h1>Hotel Name</h1>
          <p>Hotel Address</p>
        </header>

        {/* Hotel Images Collage */}
        <div className="image-collage">
          {[1, 2, 3, 4].map((index) => (
            <img key={index} src={getRandomImage()} alt={`Image ${index}`} />
          ))}
        </div>

        {/* Hotel Amenities */}
        <div className="amenities">
          <h2>Amenities</h2>
          <ul>
            <li>Amenity 1</li>
            <li>Amenity 2</li>
            <li>Amenity 3</li>
          </ul>
        </div>

        {/* Room Types */}
        <div className="room-types">
          <h2>Room Types</h2>
          <div>
            <h3>Room Type 1</h3>
            <p>Room Type 1 Description</p>
            <p>Price: $100 per night</p>
          </div>
          <div>
            <h3>Room Type 2</h3>
            <p>Room Type 2 Description</p>
            <p>Price: $150 per night</p>
          </div>
        </div>
        <div className="container mx-auto mt-6 p-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold mb-4">Book a Hotel</h1>

            <form onSubmit={handleSubmit}>
              <table className="w-full mb-4">
                <tr>
                  <td className="pr-2">
                    <label htmlFor="checkInDate">Check-in Date:</label>
                  </td>
                  <td>
                    <input
                      type="date"
                      id="checkInDate"
                      name="checkInDate"
                      className="w-full border rounded p-2"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">
                    <label htmlFor="checkOutDate">Check-out Date:</label>
                  </td>
                  <td>
                    <input
                      type="date"
                      id="checkOutDate"
                      name="checkOutDate"
                      className="w-full border rounded p-2"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">
                    <label htmlFor="guests">Number of Guests:</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      className="w-full border rounded p-2"
                    />
                  </td>
                </tr>
              </table>

              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
