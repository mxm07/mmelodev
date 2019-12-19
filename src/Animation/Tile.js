import React from 'react'
import './Tile.scss'

const Tile = ({ size, empty }) => (
  <div 
    style={{
      flexBasis: `${size}px`,
      width: `${size}px`,
      height: `${size}px`,
      display: empty ? 'none' : 'inline-block'
    }}
    className="tile" 
  />
)

export default Tile
