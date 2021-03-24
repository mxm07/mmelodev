import React from 'react'
import Home from './app/Home'
import Background from './app/Background'

import './App.scss'

const App = () => {
  return (
    <div className="app-wrapper">
      <Background />
      
      <div className="app">
        <Home />
      </div>
    </div>
  )
}

export default App