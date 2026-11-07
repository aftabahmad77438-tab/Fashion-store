import React, { useContext } from 'react'
import './Cartitems.css'
import { shopcontext } from '../../context/Shopcontext'

import remove_icon from '../assets/cart_cross_icon.png'
const Cartitems = () => {
    const { totalamount,all_product,cartitems,removefromcart}=useContext(shopcontext);
  return (
    <div className='cartitems'>
        <div className="five">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>

        {all_product.map((e)=>{
                if(cartitems[e._id] > 0)
        {


                return   <div className="toshow">

               <img className='toshowimg' src={e.image}/>
                   <p>{e.name}</p>
              <p>${e.new_price}</p>
               <p className='quan'>{cartitems[e._id]}</p>
               <p>${cartitems[e._id]* e.new_price}</p>
               <img onClick={()=>{removefromcart(e._id)}} src={remove_icon}/>

                 </div>

       }
       return null;
        })}

        <div className="totalamount">

           <div className='abovepromo'>

             <h3>cart total </h3>
            <div className="subtotal">
              <p>subtotal</p>
              <p>${totalamount()}</p>
            </div>

            <div className="shipping">
              <p>shipping fee</p>
              <p>Free</p>
            </div>

            <div className="total">
              <h4>Total</h4>
              <p className='boldd'>${totalamount()}</p>
            </div>
            <button className='totalbtn'>Procced to checkout</button>




           </div>

            <div className="promo">
              <p>if you have promo code enter it here </p>
              <input type='text' placeholder=' Enter you promo code'></input>
              <button className='totalbtn'>submit</button>
            </div>


        </div>
      
    </div>
    
  )
}

export default Cartitems
