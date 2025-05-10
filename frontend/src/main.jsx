import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
  <App />
  </ShopContextProvider>
  </BrowserRouter>,
)
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import { ToastContainer, toast } from 'react-toastify';
// Configure global toast settings
// toast.configure({
//   autoClose: 1500, 
//   hideProgressBar: false,
//   position: "top-right", 
//   theme: "light", 
// });

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
  <App />
   <ToastContainer
      autoClose={1000}
      hideProgressBar={false} 
      position="top-right"    
      theme="light"          
    />
  </ShopContextProvider>
  </BrowserRouter>,
)
