import React, { createContext, useEffect, useState } from "react";

export const shopcontext = createContext(null);

const Shopcontextprovider = (props) => {

  const [all_product, setall_product] = useState([]);
  const [cartitems, setcartitems] = useState({});


  useEffect(() => {
  const token = localStorage.getItem('auth-token')
  if (token) {
    fetch('http://localhost:4000/getcart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,
      },
    })
      .then((res) => res.json())
      .then((data) => setcartitems(data))
  }
}, [])



useEffect(() => {
  const token = localStorage.getItem('auth-token')
  if (token) {
    fetch('http://localhost:4000/updatecart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,
      },
      body: JSON.stringify({ cartitems }),
    })
  }
}, [cartitems])



  useEffect(() => {
    fetch('http://localhost:4000/allproduct')
      .then((res) => res.json())
      .then((data) => {
        console.log('fetched:', data)
        setall_product(data)
      })
  }, [])

  const addtocart = (itemid) => {
    setcartitems((prev) => ({ ...prev, [itemid]: (prev[itemid] || 0) + 1 }));
  }

  const removefromcart = (itemid) => {
    setcartitems((prev) => ({ ...prev, [itemid]: (prev[itemid] || 0) - 1 }));
  }

  const carttotal = () => {
    let total = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        total += cartitems[item]
      }
    }
    return total;
  }

  const totalamount = () => {
    let total = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = all_product.find((product) => product._id === item)
        if (iteminfo) {
          total += iteminfo.new_price * cartitems[item];
        }
      }
    }
    return total;
  }

  const contextvalue = { carttotal, totalamount, all_product, cartitems, addtocart, removefromcart };

  return (
    <shopcontext.Provider value={contextvalue}>
      {props.children}
    </shopcontext.Provider>
  );
};

export default Shopcontextprovider;