import React from 'react';
import NavbarStyled from './components/Navbar/NavbarStyled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Projects from './pages/projects';

  
function App() {
  return (
    <Router>
      <NavbarStyled />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />

      </Switch>
    </Router>
  );
}
  
export default App;