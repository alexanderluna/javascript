import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import './App.css';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  </div>
);

export default App;
