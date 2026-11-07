import React,{useContext} from 'react'
import { shopcontext } from '../context/Shopcontext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import './Shopcategory.css'
import Item from '../components/item/Item'


const Shopcategory = (props) => {

  const {all_product}=useContext(shopcontext);

  return (
    <div className='shopcategory'>

      <img className='banner' src={props.banner}/>

      <div className='fortext'>
        <p>Showing 1-12 out of 36 products</p>
        <p className='but' type='button'>Sort by <img src={dropdown_icon}/> </p>
        
        </div>


        <div className='allcategory'>
          {all_product.map((obj,i)=>{
            if(props.category===obj.category){
               return <Item key={obj._id} _id={obj._id} name={obj.name} image={obj.image} oldprice={obj.old_price} newprice={obj.new_price} />
            }else{
              return null;
            }
              })}
        </div>


      
    </div>
  )
}

export default Shopcategory
