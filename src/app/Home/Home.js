import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import { HOME_NAME, HOME_DESC } from 'Constants'

import NotFound from '../NotFound'

import liIcon from 'Assets/linkedin.png'
import gitIcon from 'Assets/github.png'
import emailIcon from 'Assets/email.png'

import './Home.scss'

const Home = () => (
  <Switch>
    <Route exact path="/">
      <div className="home">
        <h1 className="home__name">{ HOME_NAME }</h1>
        <p className="home__desc">{ HOME_DESC }</p>

        <div className="home__social-bar">
          <a href="https://www.linkedin.com/in/maxwell-melo/" title="LinkedIn">
            <img className="home__social-bar__icon" src={ liIcon } alt="linkedIn" />
          </a>
          <a href="https://www.github.com/mxm07" title="GitHub">
            <img className="home__social-bar__icon" src={ gitIcon } alt="github" />
          </a>
          <a href="mailto:mxm804@gmail.com" title="Email">
            <img className="home__social-bar__icon" src={ emailIcon } alt="mxm804@gmail.com" />
          </a>
        </div>
      </div>
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
)

export default Home
