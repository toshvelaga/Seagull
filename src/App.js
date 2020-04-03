import React from 'react';
import './App.css';
import Home from './business/containers/Home/Home'
import SignIn from './business/containers/SignIn/SignIn'
import SignUp from './business/containers/SignUp/SignUp'
import MenuCardForm from './business/containers/MenuCardForm/MenuCardForm'
import Display from './business/containers/Display/Display';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/display'>
            <Display />
          </Route>

          <Route path='/menucardform'>
            <MenuCardForm />
          </Route>

          <Route path='/signin'>
            <SignIn />
          </Route>
          
          <Route path='/signup'>
            <SignUp />
          </Route>
      </Router>
    </div>
  );
}

export default App;
