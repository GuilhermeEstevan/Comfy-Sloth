import { useState } from 'react'
import Testing from './Testing'
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home, ProductsPage, SingleProductPage, About, CartPage, ErrorPage, Checkout, Private } from './pages'
import { Sidebar, Navbar, Footer } from './components/index'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}

export default App
