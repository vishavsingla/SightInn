import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Signup from './Pages/Signup';
// import Signin from './Pages/Signin';
import Home from "./Pages/Home";
import CreateHotelForm from "./components/CreateHotelForm";
import EditHotelForm from "./components/EditHotelForm";
import Redirect from "./Pages/Redirect";
import AdminPage from "./Pages/adminPage";
import Booking from "./Pages/Booking";

function App() {
  return (
    <BrowserRouter className="flex items-center justify-center">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateHotelForm />} />
          <Route path="/update/:id" element={<EditHotelForm />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/booking/:hotelId" element={<Booking />} />

          {/* <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
