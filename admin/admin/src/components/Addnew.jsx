import React, { useState } from 'react'
import './Addnew.css'
import upload_icon from '../assets/upload_icon.jpg'

const Addnew = () => {
  const [product, setProduct] = useState({
    name: '',
    category: 'men',
    old_price: '',
    new_price: '',
    image: '',
  })

  const changeHandler = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }
  const [image, setImage] = useState(null)

const imageHandler = (e) => {
  setImage(e.target.files[0])
}

const addbtn = async () => {
  let productObj = { ...product }

  if (image) {
    let formData = new FormData()
    formData.append('product', image)

    const uploadRes = await fetch('http://localhost:4000/upload', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json())

    if (uploadRes.success) {
      productObj.image = uploadRes.image_url
    }
  }

  console.log(productObj)

  const addRes = await fetch('http://localhost:4000/addproduct', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productObj),
  }).then((res) => res.json())

  console.log(addRes)
  if (addRes.success) {
    alert('Product added')
  }
}

  return (
    <div className='addnew-page'>

      <div className='addnew-item'>
        <p>Product title</p>
        <input value={product.name} onChange={changeHandler} type='text' name='name' />
      </div>

      <div className='addnew-item'>
        <p>Old price</p>
        <input value={product.old_price} onChange={changeHandler} type='number' name='old_price' />
      </div>

      <div className='addnew-item'>
        <p>New price</p>
        <input value={product.new_price} onChange={changeHandler} type='number' name='new_price' />
      </div>

      <div className='addnew-item'>
        <p>Category</p>
        <select value={product.category} onChange={changeHandler} name='category'>
          <option value='men'>Men</option>
          <option value='women'>Women</option>
          <option value='kids'>Kids</option>
        </select>
      </div>
      <div className='addnew-item'>
  <p>Click to add new image</p>
  <label htmlFor='file-input'>
    <img
      src={image ? URL.createObjectURL(image) : upload_icon}
      className='addnew-thumbnail-img'
      alt=''
    />
  </label>
  <input
    onChange={imageHandler}
    type='file'
    name='image'
    id='file-input'
    hidden
  />
</div>

      <button onClick={()=>{addbtn()}} className='btn'>Add</button>


    </div>
  )
}

export default Addnew