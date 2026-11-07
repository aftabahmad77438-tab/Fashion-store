import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h2>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h2>
        <p>subscribe to our newsletter to stay updated.</p>
        <div className='in'>
            <input type='email' placeholder='enter your email'/>
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default Newsletter
