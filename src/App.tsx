import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router'

import './App.css'
import NavBar from './components/NavBar'
import type { UserTypes } from "./types";

const App: React.FC = () => {
  const User: UserTypes = {
    userName: "nirmal",
    isLoggedIn: false
  };

  return (
    <BrowserRouter>
      <NavBar User={User} />
      <div className="pages">
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/products' element={<h1>Products Page</h1>} />
          <Route path='/cart' element={<h1>Product Cart</h1>} />
        </Routes>
      </div>
      <h1>Footer</h1>
    </BrowserRouter>
  )
}

export default App;
