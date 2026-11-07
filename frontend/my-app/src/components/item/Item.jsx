import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props._id}`}>
        <img 
          onClick={() => window.scrollTo(0, 0)} 
          src={props.image} 
          alt={props.name}
        />
      </Link>
      
      <p>{props.name}</p>

      <div className='price'>
        <p className='old'>${props.oldprice}</p>
        <p className='new'>${props.newprice}</p>
      </div>
    </div>
  )
}

export default Item