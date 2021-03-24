import React from 'react'
import { Link } from 'react-router-dom'
import './LinkBar.scss'

const LinkBar = ({ className, links }) => (
  <div className={ `linkbar${className ? ` ${className}` : ''}` }>
    { 
      links.map(({ display, url }, i) => (
        <>
          { url.startsWith('/') && <Link to={ url }>{ display }</Link> }
          { !url.startsWith('/') && <a href={ url }>{ display }</a> }
          { i < links.length - 1 && <span className="linkbar__divider">/</span> }
        </>
      ))
    }
  </div>
)

export default LinkBar
