import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Tile from './Tile'


class RouteAnimation extends Component {
  state = {
    content: null,
    tiles: []
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.location !== prevProps.location) {
      this.routeChanged()
    }
  }
  
  routeChanged = () => {
    const { content } = this.state
    const { tile, app, border } = this.props

    if (!content) return

    const cover = app / tile
    const newTiles = []
    const dim = cover + border * 2
    const bh = dim * border

    for (let i = 0; i < (cover + border * 2) ** 2; i++) {
      const inside = (i > bh && i < cover ** 2 - bh) &&
        (i % dim) > border && (i % dim) < (cover - border)

      const empty = { empty: inside }

      newTiles.push(<Tile key={i} size={ tile } {...empty} />)
    }

    this.setState({ tiles: newTiles })
  }
  
  setContent = (ref) => { 
    this.setState({ content: ref }, this.routeChanged)
  }

  render = () => {
    const { sizes: { app, tile, border } } = this.props
    const { tiles } = this.state

    const wrapperDim = app + (tile * border)

    return (
      <div 
        className="tile-wrapper" 
        style={{
          width: wrapperDim,
          height: wrapperDim,
          display: 'flex', 
          flexWrap: 'wrap' 
        }}
      >
        { tiles }
      </div>
    )
  }
}

export default withRouter(RouteAnimation)