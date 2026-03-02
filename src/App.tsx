import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router'

import './App.css'

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <h1>NavBar</h1>
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
