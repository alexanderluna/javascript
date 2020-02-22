import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/shop';
import './App.css';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={Shop} />
    </Switch>
  </div>
);

export default App;
