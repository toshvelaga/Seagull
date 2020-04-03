import React from 'react';
import './App.css';
import Home from './containers/Home/Home'

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
          <Route path='/Home'>
            <Home />
          </Route>
      </Router>
    </div>
  );
}

export default App;
