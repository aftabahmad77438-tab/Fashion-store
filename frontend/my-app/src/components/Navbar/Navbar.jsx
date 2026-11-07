import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { shopcontext } from '../../context/Shopcontext';

const Navbar = () => {
  const [menu, setmenu] = useState('shop');
  const { carttotal } = useContext(shopcontext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('auth-token');
    window.location.replace('/login');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className='d-flex align-items-center gap-2'>
            <h2 className="mt-0">SHOPPER</h2>
            <img src={logo} height={50} />
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link
                to='/'
                onClick={() => setmenu('shop')}
                className="nav-link active"
                style={{ textDecoration: 'none', color: 'black', marginTop: '0.5rem' }}
              >
                SHOP
                {menu === 'shop' ? <hr /> : <></>}
              </Link>

              <Link
                to='/mens'
                onClick={() => setmenu('mens')}
                className="nav-link"
                style={{ textDecoration: 'none', color: 'black', marginTop: '0.5rem' }}
              >
                MENS
                {menu === 'mens' ? <hr /> : <></>}
              </Link>

              <Link
                to='/womens'
                onClick={() => setmenu('women')}
                className="nav-link"
                style={{ textDecoration: 'none', color: 'black', marginTop: '0.5rem' }}
              >
                WOMENS
                {menu === 'women' ? <hr /> : <></>}
              </Link>

              <Link
                to='/kids'
                onClick={() => setmenu('kids')}
                className="nav-link"
                style={{ textDecoration: 'none', color: 'black', marginTop: '0.5rem' }}
              >
                KIDS
                {menu === 'kids' ? <hr /> : <></>}
              </Link>
            </div>

            {localStorage.getItem('auth-token')
              ? <button className='m-2' onClick={logout}>Logout</button>
              : <Link to='/login'><button className='m-2'>Login</button></Link>
            }

            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Link to='/cart'><img src={cart_icon} /></Link>
              <div className='counter'>{carttotal()}</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar