import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>

      <Link to='/addproduct' className='sidebar-link'>
        <div className='addnew'>
          <img src={logo} />
          <p>Add new product</p>
        </div>
      </Link>

      <Link to='/showall' className='sidebar-link'>
        <div className='alllist'>
          <img src={logo} />
          <p>Show all product</p>
        </div>
      </Link>

    </div>
  )
}

export default Sidebar