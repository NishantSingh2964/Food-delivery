import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a detectable array of dishes crafted with the finest ingredient and culinary experties. our mission is to satisfy your carving and elevate your dining experience, one dilicious meal at a time</p>
        <button><a href='#explore-menu'>View Menu</a></button>
      </div>
    </div>
  )
}

export default Header
