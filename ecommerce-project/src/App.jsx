import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { Checkout } from './pages/CheckoutPage'
import { Orders } from './pages/OrdersPage'
import './App.css'

function App() {

  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
     .then((response) => {
       setCart(response.data)
    }); 
  }, []);

  return (
    <Routes>
     <Route index element={<HomePage cart={cart}/>}/>
     <Route path="checkout" element={<Checkout cart={cart}/>}/>
     <Route path="orders" element={<Orders/>}/>
    </Routes>
  );
}

export default App