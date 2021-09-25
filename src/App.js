import React from 'react'
import Header from './components/Header'
import Money from './components/Money'
import Products from './components/Products'
import Receipt from './components/Receipt'

import './App.css'
const App = () => {
  return (
    <div style={{ background: '#EFEFEF', paddingBottom: 100 }}>
      <Header />
      <Money />
      <Products />
      <Receipt />
    </div>
  )
}

export default App
