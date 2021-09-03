import React, { Component } from "react";
import footerIcon from "./public/images/logo.svg"

class Footer extends Component {
   
  render() {
    return (
      <footer className="resume-footer container">
        <p>This page was built using React <img alt="favicon.ico" className="footer-img" src={footerIcon}/></p>
        <p>(626) 346-4095 | johnsonle2929@gmail.com</p>
        <p><i><a href="https://www.linkedin.com/in/johnson-thieu/">linkedin.com/in/johnson-thieu</a> | <a href="https://github.com/MyNameIsJohnson">github.com/MyNameIsJohnson</a></i> San Francisco Bay Area, California</p>
      </footer>
    );
  }
}

export default Footer;
