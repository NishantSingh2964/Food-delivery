import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import Cart from './pages/Cart/Cart';
import './App.css'; // Include styles here
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Verify from './pages/verify/Verify.jsx';
import Myorder from './pages/MyOrders/Myorder';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <div className="overlay" />}
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
      <div className={`app ${showLogin ? 'blurred' : ''}`}>
        <Navbar setShowLogin={setShowLogin} showLogin={showLogin} />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify/>}/>
          <Route path='/myorders' element={<Myorder/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
