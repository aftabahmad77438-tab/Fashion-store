
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Shop from './pages/Shop';
import Shopcategory from './pages/Shopcategory';
import Product from './pages/Product';
import Loginsignup from './pages/Loginsignup';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import banner_kids from './components/assets/banner_kids.png'
import banner_mens from './components/assets/banner_mens.png'
import banner_women from './components/assets/banner_women.png'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (


    <>
    <BrowserRouter>

       <Navbar/>

       <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<Shopcategory banner={banner_mens} category='men'/>}/>
          <Route path='/womens' element={<Shopcategory banner={banner_women} category='women' />}/>
          <Route path='/kids' element={<Shopcategory banner={banner_kids} category='kids'/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/login' element={<Loginsignup/>}/>

       </Routes>  
         <Footer/>
    </BrowserRouter>
   
    
  
    </>
  )
}

export default App
