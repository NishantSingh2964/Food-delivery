import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets.js'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ setToken }) => {

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("adminToken");
    setToken("");
    navigate("/");
  };

  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="" />

      <div className='profile-container'>
        <img className='profile' src={assets.profile_image} alt="" />

        <div className='dropdown'>
          <p onClick={logoutHandler}>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar

