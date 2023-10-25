import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Signup from './Pages/Signup';
// import Signin from './Pages/Signin';
import Home from './Pages/Home'
import Redirect from './Pages/Redirect';
import CreateHotelForm from './components/CreateHotelForm';

function App() {
  return (
    <BrowserRouter className='flex items-center justify-center'>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redirect" element={<CreateHotelForm />} />

          {/* <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



