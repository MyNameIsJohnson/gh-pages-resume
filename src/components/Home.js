import React, { Component } from "react";
import headshot from "../public/images/headshot.jpeg"
import linkedIn from "../public/images/linkedIn.png"
import gitHub from "../public/images/gitHub.png"
import diceracer from "../public/videos/diceracer.mov";


class Home extends Component {
   
  render() {
    return (
      <header className="resume-header container">
        <aside className="flex-item">
          <img className="headshot" alt="myheadshot" src={headshot}/>
          <div className="content">
            <h4 className="">Johnson Le Thieu</h4>
            <h6><i>Full-Stack Software Engineer</i></h6>
            <p>415-425-7288</p>
            <p> johnsonle2929@gmail.com</p>
            <p>San Francisco Bay Area, California</p>
            <p><a href="https://www.linkedin.com/in/johnson-thieu/"> 
              <img className="icon linkedIn" alt="myheadshot" src={linkedIn}/>
                </a> 
                <a href="https://github.com/MyNameIsJohnson">
                <img className="icon gitHub" alt="gitHub" src={gitHub}/>
                </a>
            </p>
          </div>
        </aside>
        <article className="flex-item">
        <h3>Welcome to my page!</h3>
        <p>Hope you like what I build here! Please feel free to explore. I've included three of my projects and resume information'</p>
        <video className=" intro_video" width="750" height="500" controls >
                  <source src={diceracer} type="video/mp4"/>
                </video>
        </article>

      </header>
    );
  }
}

export default Home;
