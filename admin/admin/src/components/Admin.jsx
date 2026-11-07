import React from 'react'
import './Admin.css'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Addnew from './Addnew'
import Showall from './Showall'

const Admin = () => {
  return (
   <div className='admin'>
  <Sidebar />
  <div className='admin-routes'>
    <Routes>
      <Route path='/addproduct' element={<Addnew />} />
      <Route path='/showall' element={<Showall />} />
    </Routes>
  </div>
</div>
  )
}

export default Admin