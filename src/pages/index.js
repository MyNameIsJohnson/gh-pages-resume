import React, { Component } from "react";


class Home extends Component {
   
  render() {
    return (
      <header className="resume-header container">
        <aside className="flex-item">
          <img className="headshot" alt="myheadshot" src={process.env.PUBLIC_URL + '/images/headshot.jpeg'}/>
          <div className="content">
            <p className="profileName" >Johnson Thieu</p>
            <p className="title">Full-Stack Software Engineer</p>

            
            <p className="info"> <i className="material-icons" >phone</i> (415) 425-7288</p>
            <p className="info"> <i className="material-icons">email</i><a href="mailto:johnsonle2929@gmail.com">johnsonle2929@gmail.com</a></p>
            <p> <i className="material-icons" >place</i>San Francisco Bay Area, CA</p>
            <p>
              <a href="https://www.linkedin.com/in/johnson-thieu/"> 
                <img className="icon linkedIn" alt="myheadshot" src={process.env.PUBLIC_URL + '/images/linkedIn.png'}/>
              </a>  
              <a href="https://github.com/MyNameIsJohnson">
                <img className="icon gitHub" alt="gitHub" src={process.env.PUBLIC_URL + '/images/github.png'}/>
              </a>
            </p>
          </div>
        </aside>
        <article className="flex-item">
          <h2>Welcome to my page!</h2>
          <p className="welcome">Hope you like what I build here! Please feel free to explore. I have included three of my projects and resume information.</p>
          {/* <video className=" intro_video" width="750" height="500" controls ></video> */}
          <p className="mb-8 leading-relaxed">
            Software Engineer with a successful background in consumer facing roles with a 90%+ quality rating. Languages & Frameworks: Javascript, HTML, CSS, Node, Express, Python, Django, MongoDb, React and libraries such as Jquery and Bootstrap technologies.
            Version Control & Workflow Management: Git, Github, Command line
            Life long learner, Proactive leader, Coordinated and Organized
            I am Structured and can delegate with humility for completing any shared task. Experienced with Time Management, Working well under pressure, Detail Oriented, very Analytical and Driven.
          </p>
        </article>
        
      </header>
    );
  }
}

export default Home;
