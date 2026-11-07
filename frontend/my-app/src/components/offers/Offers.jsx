import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>

        <div className='right'>

        <div className='hea'>
            <h2>EXCLUSIVE</h2>
            <h2>OFFERRS FOR YOU</h2>
        </div>

            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>

        </div>

        <div className="left">
            
            <img src={exclusive_image}/>

        </div>
      
    </div>
  )
}

export default Offers
