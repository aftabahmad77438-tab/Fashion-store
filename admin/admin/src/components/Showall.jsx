import React from 'react'
import './Showall.css'
import cross from '../assets/cross.png'
import  { useState, useEffect } from 'react'
export const API = import.meta.env.VITE_API_URL || "http://localhost:4000";
const Showall = () => {
    const [allproduct, setAllProduct] = useState([])

const fetchInfo = async () => {
const uploadRes = await fetch(`${API}/allproduct`, {
    .then((res) => res.json())
    .then((data) => setAllProduct(data))
}

useEffect(() => {
  fetchInfo()
}, [])

const removebtn = async (id) => {
  console.log(id)

  await fetch(`${API}/removeproduct`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id: id }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(`${data.name} Deleted!`)
      fetchInfo() 
    })
}


  return (
    <div className='showall'>

      <div>
         <h2>All products </h2>
      </div>

      <div className='p'>
        <p>product</p>
        <p>title</p>
        <p>category</p>
        <p>oldprice</p>
        <p>newprice</p>
        <p>remove</p>
       
      </div>
      <hr/>



      <div className="maping">
       {allproduct.map((data, index) => {
  return (
    <div className='separate' key={index}>
      <img src={data.image} />
      <p>{data.name}</p>
      <p>{data.category}</p>
      <p>$ {data.old_price}</p>
      <p>$ {data.new_price}</p>
      <p><img onClick={()=>{removebtn(data._id)}} src={cross} className='cross-icon' /></p>
      <hr />
    </div>
  )
})}

    </div>
    



</div>
  )
}

export default Showall
