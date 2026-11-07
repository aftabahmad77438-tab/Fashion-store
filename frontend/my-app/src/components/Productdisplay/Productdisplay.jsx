import React from 'react'
import './Productdisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { useContext } from 'react'
import { shopcontext } from '../../context/Shopcontext'

const Productdisplay = (props) => {
    const {product}=props;
    const {all_product,cartitems,addtocart}=useContext(shopcontext);
  return (
    <div className='display'>
        
        <div className="leftside">

            <div className="small">
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>

            </div>
            <div className="large">
                 <img src={product.image}/>
            </div>
          

        </div>

        <div className="rightside">
            <div className="name">
                <h2>{product.name}</h2>

            </div>
            
            <div className="stars">

                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_dull_icon}/>
                <p>(122)</p>
            </div>
            <div className="money">
                <p className='overmark'>${product.old_price}</p>
                <p>${product.new_price}</p>
            </div>
        
        <div className="details">
        <p>     A beautiful soft wearing jacket made espicially for you just because you deserve better.the trending and the new articles that will always suit our customers and satisfy them .</p>
        </div>

          <h4>SELECT SIZE</h4>
        <div className="sizes">
          
            <div className='size'>S</div>
            <div className='size'>M</div>
            <div className='size'>L</div>
            <div className='size'>XL</div>
            <div className='size'>XXL</div>
            
        </div>
            <button onClick={()=>{addtocart(product._id)}} className='cartbtn'>ADD to cart</button>
        
      </div>
    </div>
  )
}

export default Productdisplay
