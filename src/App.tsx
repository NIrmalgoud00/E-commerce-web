import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router'

import './App.css'
import NavBar from './components/NavBar'
import type { UserTypes } from "./types";

// import { products } from "./services/products";
import Home from './pages/Home';

const App: React.FC = () => {
  const User: UserTypes = {
    userName: "nirmal",
    isLoggedIn: false
  };

  // productsList()

  return (
    <BrowserRouter>
      <NavBar User={User} />
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<h1>Products Page</h1>} />
          <Route path='/cart' element={<h1>Product Cart</h1>} />
        </Routes>
      </div>
      <h1>Footer</h1>
    </BrowserRouter>
  )
}

export default App;
