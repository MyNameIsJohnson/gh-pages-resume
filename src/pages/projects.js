import React, { Component } from "react";
import Collapsible from 'react-collapsible';

class Projects extends Component {


render(){

    return(
      <div className="projects container">
        <h3><b>PROJECTS:</b></h3> 
        {/* add link to projects */}

          <h4><a href="https://mynameisjohnson.github.io/Dice-Racers/" >DiceRacer</a></h4> 
            <ul> 
              <li>Built using HTML, CSS and Javascript </li>
              <li>Features include visual effects and audio to heighten user experience.</li>
            </ul>
            <Collapsible className='Collapsible' trigger="See Demo" triggerWhenOpen="Close Demo" >
              <div style={{textAlign: 'center'}}>
                <video width="750" height="500" controls >
                  <source src={process.env.PUBLIC_URL+'diceracer.mov'} type="video/mp4"/>
                </video>
              </div>
            </Collapsible>

          <h4><a href="https://pikatsume.herokuapp.com/" >Pikatsume</a></h4> 
            <ul> 
              <li>Built using HTML, CSS and Javascript, Python, Django that allows the user to create a profile, catch pikachus’, and purchase poffins to catch pikachus.</li>
              <li>Features include visual effects to heighten user experience.</li>
              <li>I developed team collaboration and work delegation and best practices of utilizing callback functions and routing </li>                   
            </ul>
            <Collapsible className='Collapsible' trigger="See Demo" triggerWhenOpen="Close Demo" >
              <div style={{textAlign: 'center'}}>
                <video width="750" height="500" controls >
                  <source src={process.env.PUBLIC_URL+'pikatsume.mov'} type="video/mp4"/>
                </video>
              </div>
            </Collapsible>

            
          <h4><a href="https://clubhoppin.herokuapp.com/" >Club-Hoppin’</a></h4>             
          <ul> 
            <li>Built using HTML, CSS and Javascript, Node, Express, MongoDb</li>
            <li>Allows the user to view top 10 clubs of the week in San Francisco and reviews</li>
            <li>Features include an adding reviews of each club</li>
          </ul>
          <Collapsible className='Collapsible' trigger="See Demo" triggerWhenOpen="Close Demo" >
            <div style={{textAlign: 'center'}}>
              <video width="750" height="500" controls >
                <source src={process.env.PUBLIC_URL+'clubhoppin.mov'} type="video/mp4"/>
              </video>
            </div>  
          </Collapsible>
      </div>
    );
  }
}



export default Projects;