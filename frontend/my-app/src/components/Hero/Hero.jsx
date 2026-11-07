import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import hero_image from '../assets/hero_image.png'
import arrow from '../assets/arrow.png'

const Hero = () => {
  return (

    <div className='hero'>

        <div className="left">
           
            <div className="hand d-flex align-item-center ">
                <h1>new</h1>
                <img style={{width:'3rem',height:'auto',margin:'3px'}} src={hand_icon}/>
            </div>

            <h1>Collections </h1>
            <h1> for Everyone</h1>
             <p className='p'>NEW ARRIVALS ONLY</p>

            <p className='btn' type='button'>Latest collections <i className="fa-solid fa-arrow-right-long"></i></p>

        </div>

        <div className="right">

            <img src={hero_image}/>


        </div>
      
    </div>

  )
}

export default Hero
