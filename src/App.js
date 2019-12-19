import React from 'react'
import Home from './Home'

import './App.scss'

const App = ({ setContent, appSize }) => {
  return (
    <div className="app-wrapper">
      <div className="anim-wrapper">
        <div 
          ref={setContent} 
          style={{ width: appSize, height: appSize }}
          className="app"
        >
          <Home />
        </div> 
      </div>
    </div>
  )
}

export default App