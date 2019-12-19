import React, { Fragment } from 'react'
import {
    Route,
    Link
} from 'react-router-dom'
import Projects from '../Projects'
import About from '../About'

import './Home.scss'

const Home = () => (
  <Fragment>
    <h1>max melo</h1>
    
    <p>computer programmer from nutley, nj.</p>
    
    <div className="link-wrapper">
      <Link to="/projects">projects</Link>
      <span> / </span>
      <Link to="/about">about</Link>
      <span> / </span>
      <Link to="/other">other</Link>
    </div>

    <Route path="/projects">
      <Projects />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/other">
      <Fragment />
    </Route>
  </Fragment>
)

export default Home
