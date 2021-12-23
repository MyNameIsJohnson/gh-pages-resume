import React, { Component } from "react";
import headshot from "../../public/images/headshot.jpeg"
import linkedIn from "../../public/images/linkedIn.png"
import gitHub from "../../public/images/gitHub.png"


class Home extends Component {
   
  render() {
    return (
      <header className="resume-header container">
        <aside className="flex-item">
          <img className="headshot" alt="myheadshot" src={headshot}/>
          <div className="content">
            <p className="profileName" >Johnson Thieu</p>
            <p className="title">Full-Stack Software Engineer</p>

            
            <p className="info"> <i className="material-icons" >phone</i> (415) 425-7288</p>
            <p className="info"> <i className="material-icons">email</i><a href="mailto:johnsonle2929@gmail.com">johnsonle2929@gmail.com</a></p>
            <p> <i className="material-icons" >place</i>San Francisco Bay Area, CA</p>
            <p>
              <a href="https://www.linkedin.com/in/johnson-thieu/"> 
                <img className="icon linkedIn" alt="myheadshot" src={linkedIn}/>
              </a>  
              <a href="https://github.com/MyNameIsJohnson">
                <img className="icon gitHub" alt="gitHub" src={gitHub}/>
              </a>
            </p>
          </div>
        </aside>
        <article className="flex-item">
          <p className="welcome">Welcome to my page!</p>
          <p style={{color: "white"}}>Hope you like what I build here! Please feel free to explore. I have included three of my projects and resume information.</p>
          <video className=" intro_video" width="750" height="500" controls >
            
          </video>

        </article>
        
      </header>
    );
  }
}

export default Home;
