import React from 'react'
// import data_product from '../assets/data'
import './Popular.css'
import Item from '../item/Item'
import { useState,useEffect } from 'react'

const Popular = () => {

  const [data_product, setdata_product] = useState([]);
  
      useEffect(() => {
          fetch('http://localhost:4000/popularinwomen')
              .then((res) => res.json())
              .then((data) => setdata_product(data))
      }, [])

  return (
    <div className='one'>
        <h1 className='h1'>POPULAR IN WOMEN</h1>
        <hr style={{ width: '30%', margin: 'auto',borderColor:'3px solid black',borderRadius:'10px' }} />
        <div className='popular'>
        {data_product.map((obj,i)=>{
            return <Item key={i} _id={obj._id} name={obj.name} image={obj.image} oldprice={obj.old_price} newprice={obj.new_price} />
        })}

        </div>
      
    </div>
  )
}

export default Popular
