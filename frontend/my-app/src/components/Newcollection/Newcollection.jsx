
import React, { useEffect, useState } from 'react'
const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

import './Newcollection.css'
import Item from '../item/Item'

// import new_collections from '../assets/new_collections'



const Newcollection = () => {
  const [newcollection, setnewcollection] = useState([]);
  useEffect(() => {
    fetch(`${API}/newcollections`)
      .then((res) => res.json())
      .then((data) => setnewcollection(data))
  }, [])
  return (
    <div className='newcollection'>
      
        <h1>NEW COLLECTIONS</h1>
         <hr style={{ width: '30%', margin: 'auto',borderColor:'3px solid black',borderRadius:'10px' }} />
        <div className='newcol'>
             {newcollection.map((obj,i)=>{
            return <Item key={i} _id={obj._id} name={obj.name} image={obj.image} oldprice={obj.old_price} newprice={obj.new_price} />
        })}

        </div>


      
    </div>
  )
}

export default Newcollection
