import React from 'react';
import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

// Pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import UserPage from "./pages/user";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route exact path="/user" component={UserPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
