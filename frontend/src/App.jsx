import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Placeorder from './pages/Placeorder'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Collection from './pages/Collection'
import Navbar from './components/Navbar'

const App = () => {
  return (
   <div className="px-4 sm:px[5vw] md:px-[7vw] lg:px-[9vw]">

    <Navbar></Navbar>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<Placeorder/>} />
        <Route path='/product/:productId' element={<Product/>} />
    </Routes>

   </div>
  )
}

export default App