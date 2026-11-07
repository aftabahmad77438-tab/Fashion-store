import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Shopcontextprovider from './context/Shopcontext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shopcontextprovider>
         <App />
    </Shopcontextprovider>
   
  </StrictMode>,
)
