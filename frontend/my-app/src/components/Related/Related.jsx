import React from 'react'
import './Related.css'
// import data_product from '../assets/data'
import Item from '../item/Item'
import { useState,useEffect } from 'react'

const Related = () => {
    const [data_product, setdata_product] = useState([]);
    
        useEffect(() => {
            fetch('http://localhost:4000/popularinwomen')
                .then((res) => res.json())
                .then((data) => setdata_product(data))
        }, [])
  return (
    <div style={{marginTop:'100px'}} className='related'>
         <h2 style={{textAlign:'center',marginBottom:'20px'}}>Related products</h2>
         <hr style={{ width: '30%', margin: 'auto',borderColor:'3px solid black',borderRadius:'10px' }} />
        <div className='newcol'>
             {data_product.map((obj,i)=>{
            return <Item key={i} _id={obj._id} name={obj.name} image={obj.image} oldprice={obj.old_price} newprice={obj.new_price} />
        })}

        </div>
      
    </div>
  )
}

export default Related
