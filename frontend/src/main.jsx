import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import { ToastContainer, toast } from 'react-toastify';

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
