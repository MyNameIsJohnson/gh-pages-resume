import React, { Component } from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Switch from "react-bootstrap/esm/Switch";

class App extends Component {

    
  render() {
    return (
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />

          </Switch>
      </Router>
    );
  }
}



export default App;
