import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="">
        <header>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <Link to="/login">login</Link>
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
