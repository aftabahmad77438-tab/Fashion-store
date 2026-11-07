import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import admin_icon from '../assets/admin_icon.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt="logo" className='navbar-logo' />
        <p>Shopper</p>
      </div>
      <img src={admin_icon} alt="admin" className='navbar-admin-icon' />
    </div>
  )
}

export default Navbar