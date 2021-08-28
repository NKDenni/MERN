import React from 'react';
import { Router } from '@reach/router';
import Home from './components/home';
import Path from './components/path';
import './App.css';


function App() {
  return (
    <div className="App container">
      <Router>
        <Home path='/' />
        <Home path='/home' />
        <Path path='/:x' />
        <Path path='/:x/:y' />
        <Path path='/:x/:y/:z' />
      </Router>
    </div>
  );
}

export default App;
