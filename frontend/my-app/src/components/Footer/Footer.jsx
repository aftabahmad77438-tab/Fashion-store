import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import instagram_icon from '../assets/instagram_icon.png'


const Footer = () => {
  return (
    <div className='footer'>

        <div className="footerimage">
            <img src={logo}/>
            <p>SHOPPER</p>

        </div>

        <div className="lists">
            <li>Company</li>
            <li>Product</li>
            <li>Office</li>
            <li>About </li>
            <li>Contact</li>


        </div>

        <div className="socialicon">

            <div>
                <img src={whatsapp_icon}/>
            </div>
            <div>
                <img src={pintester_icon}/>
            </div>
            <div>
                <img src={instagram_icon}/>
            </div>

        </div>

        <div className="copyright">
             
               <hr/>
            <p>Copyright @ 2026 - Aftab ahhmad , All Right Reserved</p>
        </div>

      
    </div>
  )
}

export default Footer
