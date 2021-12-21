import React, { Component } from "react";
import headshot from "./public/images/headshot.jpeg"

class Header extends Component {
   
  render() {
    return (
      <header className="resume-header container">
        <img className="headshot" alt="myheadshot" src={headshot}/>
        <h1 className="resume-title">Johnson Le Thieu</h1>
        <h2><i>Full-Stack Software Engineer</i></h2>
        <p>415-425-7288 | johnsonle2929@gmail.com</p>
        <p><i><a href="https://www.linkedin.com/in/johnson-thieu/">linkedin.com/in/johnson-thieu</a> | <a href="https://github.com/MyNameIsJohnson">github.com/MyNameIsJohnson</a></i></p>
        <p>San Francisco Bay Area, California</p>
      </header>
    );
  }
}

export default Header;
