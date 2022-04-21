import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Projects from '../Projects';

export default (
  <Switch >
    <Route exact path='/'/>
    <Route path='/projects' component={Projects}/>
  </Switch>
)