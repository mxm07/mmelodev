import React from "react";
import { HOME_NAME, HOME_DESC } from "@/constants";

import liIcon from "@/assets/linkedin.png";
import gitIcon from "@/assets/github.png";
import emailIcon from "@/assets/email.png";

import "./Home.scss";

const Home = () => (
  <div className="home">
    <h1 className="home__name">{HOME_NAME}</h1>
    <p className="home__desc">{HOME_DESC}</p>

    <div className="home__social-bar">
      <a href="https://www.linkedin.com/in/maxwell-melo/" title="LinkedIn">
        <img className="home__social-bar__icon" src={liIcon} alt="linkedIn" />
      </a>
      <a href="https://www.github.com/mxm07" title="GitHub">
        <img className="home__social-bar__icon" src={gitIcon} alt="github" />
      </a>
      <a href="mailto:mxm804@gmail.com" title="Email">
        <img
          className="home__social-bar__icon"
          src={emailIcon}
          alt="mxm804@gmail.com"
        />
      </a>
    </div>
  </div>
);

export default Home;
