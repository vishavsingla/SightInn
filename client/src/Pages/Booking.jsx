

  import React from "react";
  import Navbar from "../components/Navbar";
  import BookingForm from "../components/BookingForm"; // Import the BookingForm component
  
    function BookingPage() {
      const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      const randomImages = [
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      ];
  
    const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * randomImages.length);
      return randomImages[randomIndex];
    };
  
    return (
      <div className="flex flex-col">
        <Navbar />
        <section className="bg-gray-100 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Hotel Name</h1>
            <p className="text-gray-700">Hotel Address</p>
          </div>
        </section>
  
        <section className="p-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Description</h2>
          <p className="text-gray-700">
            Welcome to our luxurious hotel. Experience comfort and elegance like never before.
          </p>
        </section>
  
        <section className="flex px-10">
          <div className="w-3/4">
            <img
              src={getRandomImage()}
              alt="Hotel"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/4 flex flex-col justify-between pl-4">
            {[1, 2, 3].map((index) => (
              <img
                key={index}
                src={getRandomImage()}
                alt={`Image ${index}`}
                className="mb-2 rounded-lg shadow-md"
              />
            ))}
          </div>
        </section>
  
        <section className="flex mt-8">
          <div className="w-3/4 p-4">
            <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">Amenities</h2>
              <ul className="text-gray-700">
                <li>Swimming pool</li>
                <li>Spa and wellness center</li>
                <li>Restaurant and bar</li>
                <li>24-hour room service</li>
                <li>Free Wi-Fi</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Room Types</h2>
              <div className="text-gray-700">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Deluxe Room</h3>
                  <p>Experience luxury in our Deluxe Rooms. Spacious and elegant.</p>
                  <p>Price: $150 per night</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Suite</h3>
                  <p>Our Suites offer the highest level of comfort and style.</p>
                  <p>Price: $250 per night</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="w-1/4 p-4">
              
              <BookingForm /> {/* Render the BookingForm component here */}

          </div>
        </section>
        <section className="p-4">
          <h2 className="text-2xl font-semibold text-gray-900">Comments/Reviews</h2>
          {/* Add your comments/reviews components here */}
        </section>
      </div>
    );
  }
  
  export default BookingPage;
  