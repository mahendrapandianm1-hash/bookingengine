import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import RoomTypePage from './pages/RoomType';
import RoomDetailsPage from './pages/RoomDetailsPage';
import BookingPage from './pages/BookingPage';
import GuestDetailsPage from './pages/GuestDetailsPage';
import PaymentPage from './pages/PaymentPage';
import Login from './pages/Login';
import Gallery from './components/Gallery';
import {useLocation} from 'react-router-dom';
function App() {
const location = useLocation();
  return (
    <div>
      {(location.pathname !== '/payment' && location.pathname !== '/login') ? <Navbar /> : '' }
      
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomTypePage />} />
          <Route path="/room-info" element={<RoomDetailsPage />} />
          <Route path='/room-book' element={<BookingPage />} />
          <Route path='/guest-info' element={<GuestDetailsPage />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
     {(location.pathname !== '/payment'  && location.pathname !== '/login') ? <Footer />  : ''}
      
    </div>
  );
}

export default App;
