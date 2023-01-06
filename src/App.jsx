import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/home/home'
import ResponsiveAppBar from './components/navbar/navbar'
import { Clothing } from './components/clothing/clothing'
import { Electronics } from './components/electronics/electronics'
import { Appliances } from './components/appliances/appliances'
import { Books } from './components/books/books'
import { Details } from './components/product_details/product_details'
import { Cart } from './components/cart/cart'
import { Checkout } from './components/checkout/checkout'
import { PaymentPage } from './components/payment/payment'
import { Login } from './components/login/login'
import { SignUp } from './components/signup/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ResponsiveAppBar />
     <Routes>
       <Route path='/' element={<Home /> } />
       <Route path='/Cloth' element={<Clothing /> } />
       <Route path='/Electronics' element={<Electronics /> } />
       <Route path='/appliances' element={<Appliances /> } />
       <Route path='/books' element={<Books /> } />
       <Route path='/:category/product_details/:id' element={<Details /> } />
       <Route path='/cart' element={<Cart />} />
       <Route path='/checkout' element={<Checkout />} />
       <Route path="/payment" element={<PaymentPage/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<SignUp/>} />

     </Routes>
    </div>
  )
}

export default App
