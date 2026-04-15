import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Sheds from './pages/Sheds';
import Garages from './pages/Garages';
import Stables from './pages/Stables';
import FieldShelters from './pages/FieldShelters';
import GardenRooms from './pages/GardenRooms';
import SummerHouses from './pages/SummerHouses';
import Workshops from './pages/Workshops';
import BeachHuts from './pages/BeachHuts';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sheds" element={<Sheds />} />
          <Route path="/garages" element={<Garages />} />
          <Route path="/stables" element={<Stables />} />
          <Route path="/field-shelters" element={<FieldShelters />} />
          <Route path="/garden-rooms" element={<GardenRooms />} />
          <Route path="/summer-houses" element={<SummerHouses />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/beach-huts" element={<BeachHuts />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
