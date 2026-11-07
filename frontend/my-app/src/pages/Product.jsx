import React, { useContext } from 'react'
import { shopcontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom';
import Productdisplay from '../components/Productdisplay/Productdisplay';
import Description from '../components/Description/Description';
import Related from '../components/Related/Related';

const Product = () => {
  const { all_product } = useContext(shopcontext);
  const { productId } = useParams();   // ✅ match your route's param name exactly
  const product = all_product.find((e) => e._id ===productId);

  if (!product) {
    return <div>Loading...</div>       // ✅ handles the timing gap before fetch resolves
  }

  return (
    <div>
      <Productdisplay product={product} />
      <Description />
      <Related />
    </div>
  )
}

export default Product